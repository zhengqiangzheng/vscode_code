// Copyright 2019 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package cache

import (
	"bytes"
	"context"
	"fmt"
	"go/ast"
	"go/token"
	"go/types"
	"sort"
	"sync"

	"golang.org/x/tools/go/packages"
	"golang.org/x/tools/internal/lsp/source"
	"golang.org/x/tools/internal/lsp/telemetry"
	"golang.org/x/tools/internal/memoize"
	"golang.org/x/tools/internal/telemetry/log"
	"golang.org/x/tools/internal/telemetry/trace"
	errors "golang.org/x/xerrors"
)

// checkPackageHandle implements source.CheckPackageHandle.
type checkPackageHandle struct {
	handle *memoize.Handle

	// compiledGoFiles are the ParseGoHandles that compose the package.
	compiledGoFiles []source.ParseGoHandle

	// mode is the mode the the files were parsed in.
	mode source.ParseMode

	// m is the metadata associated with the package.
	m *metadata

	// key is the hashed key for the package.
	key []byte
}

func (cph *checkPackageHandle) packageKey() packageKey {
	return packageKey{
		id:   cph.m.id,
		mode: cph.mode,
	}
}

// checkPackageData contains the data produced by type-checking a package.
type checkPackageData struct {
	memoize.NoCopy

	pkg *pkg
	err error
}

// checkPackageHandle returns a source.CheckPackageHandle for a given package and config.
func (s *snapshot) checkPackageHandle(ctx context.Context, id packageID, mode source.ParseMode) (*checkPackageHandle, error) {
	// Check if we already have this CheckPackageHandle cached.
	if cph := s.getPackage(id, mode); cph != nil {
		return cph, nil
	}

	// Build the CheckPackageHandle for this ID and its dependencies.
	cph, deps, err := s.buildKey(ctx, id, mode)
	if err != nil {
		return nil, err
	}

	// Do not close over the checkPackageHandle or the snapshot in the Bind function.
	// This creates a cycle, which causes the finalizers to never run on the handles.
	// The possible cycles are:
	//
	//     checkPackageHandle.h.function -> checkPackageHandle
	//     checkPackageHandle.h.function -> snapshot -> checkPackageHandle
	//

	m := cph.m
	files := cph.compiledGoFiles
	key := cph.key
	fset := s.view.session.cache.fset

	h := s.view.session.cache.store.Bind(string(key), func(ctx context.Context) interface{} {
		// Begin loading the direct dependencies, in parallel.
		for _, dep := range deps {
			go func(dep *checkPackageHandle) {
				dep.check(ctx)
			}(dep)
		}
		data := &checkPackageData{}
		data.pkg, data.err = typeCheck(ctx, fset, m, mode, files, deps)
		return data
	})
	cph.handle = h

	// Cache the CheckPackageHandle in the snapshot.
	s.addPackage(cph)

	return cph, nil
}

// buildKey computes the checkPackageKey for a given checkPackageHandle.
func (s *snapshot) buildKey(ctx context.Context, id packageID, mode source.ParseMode) (*checkPackageHandle, map[packagePath]*checkPackageHandle, error) {
	m := s.getMetadata(id)
	if m == nil {
		return nil, nil, errors.Errorf("no metadata for %s", id)
	}
	phs, err := s.compiledParseGoHandles(ctx, m, mode)
	if err != nil {
		return nil, nil, err
	}
	cph := &checkPackageHandle{
		m:               m,
		compiledGoFiles: phs,
		mode:            mode,
	}

	// Make sure all of the depList are sorted.
	depList := append([]packageID{}, m.deps...)
	sort.Slice(depList, func(i, j int) bool {
		return depList[i] < depList[j]
	})

	deps := make(map[packagePath]*checkPackageHandle)

	// Begin computing the key by getting the depKeys for all dependencies.
	var depKeys [][]byte
	for _, depID := range depList {
		depHandle, err := s.checkPackageHandle(ctx, depID, source.ParseExported)
		if err != nil {
			log.Error(ctx, "no dep handle", err, telemetry.Package.Of(depID))

			// One bad dependency should not prevent us from checking the entire package.
			// Add a special key to mark a bad dependency.
			depKeys = append(depKeys, []byte(fmt.Sprintf("%s import not found", id)))
			continue
		}
		deps[depHandle.m.pkgPath] = depHandle
		depKeys = append(depKeys, depHandle.key)
	}
	cph.key = checkPackageKey(cph.m.id, cph.compiledGoFiles, m.config, depKeys)
	return cph, deps, nil
}

func checkPackageKey(id packageID, phs []source.ParseGoHandle, cfg *packages.Config, deps [][]byte) []byte {
	return []byte(hashContents([]byte(fmt.Sprintf("%s%s%s%s", id, hashParseKeys(phs), hashConfig(cfg), hashContents(bytes.Join(deps, nil))))))
}

// hashConfig returns the hash for the *packages.Config.
func hashConfig(config *packages.Config) string {
	b := bytes.NewBuffer(nil)

	// Dir, Mode, Env, BuildFlags are the parts of the config that can change.
	b.WriteString(config.Dir)
	b.WriteString(string(config.Mode))

	for _, e := range config.Env {
		b.WriteString(e)
	}
	for _, f := range config.BuildFlags {
		b.WriteString(f)
	}
	return hashContents(b.Bytes())
}

func (cph *checkPackageHandle) Check(ctx context.Context) (source.Package, error) {
	return cph.check(ctx)
}

func (cph *checkPackageHandle) check(ctx context.Context) (*pkg, error) {
	v := cph.handle.Get(ctx)
	if v == nil {
		return nil, errors.Errorf("no package for %s", cph.m.id)
	}
	data := v.(*checkPackageData)
	return data.pkg, data.err
}

func (cph *checkPackageHandle) CompiledGoFiles() []source.ParseGoHandle {
	return cph.compiledGoFiles
}

func (cph *checkPackageHandle) ID() string {
	return string(cph.m.id)
}

func (cph *checkPackageHandle) MissingDependencies() []string {
	var md []string
	for i := range cph.m.missingDeps {
		md = append(md, string(i))
	}
	return md
}

func (cph *checkPackageHandle) Cached() (source.Package, error) {
	return cph.cached()
}

func (cph *checkPackageHandle) cached() (*pkg, error) {
	v := cph.handle.Cached()
	if v == nil {
		return nil, errors.Errorf("no cached type information for %s", cph.m.pkgPath)
	}
	data := v.(*checkPackageData)
	return data.pkg, data.err
}

func (s *snapshot) compiledParseGoHandles(ctx context.Context, m *metadata, mode source.ParseMode) ([]source.ParseGoHandle, error) {
	phs := make([]source.ParseGoHandle, 0, len(m.compiledGoFiles))
	for _, uri := range m.compiledGoFiles {
		f, err := s.view.GetFile(ctx, uri)
		if err != nil {
			return nil, err
		}
		fh := s.Handle(ctx, f)
		phs = append(phs, s.view.session.cache.ParseGoHandle(fh, mode))
	}
	return phs, nil
}

func typeCheck(ctx context.Context, fset *token.FileSet, m *metadata, mode source.ParseMode, phs []source.ParseGoHandle, deps map[packagePath]*checkPackageHandle) (*pkg, error) {
	ctx, done := trace.StartSpan(ctx, "cache.importer.typeCheck", telemetry.Package.Of(m.id))
	defer done()

	var rawErrors []error
	for _, err := range m.errors {
		rawErrors = append(rawErrors, err)
	}

	pkg := &pkg{
		id:              m.id,
		pkgPath:         m.pkgPath,
		mode:            mode,
		compiledGoFiles: phs,
		imports:         make(map[packagePath]*pkg),
		typesSizes:      m.typesSizes,
		typesInfo: &types.Info{
			Types:      make(map[ast.Expr]types.TypeAndValue),
			Defs:       make(map[*ast.Ident]types.Object),
			Uses:       make(map[*ast.Ident]types.Object),
			Implicits:  make(map[ast.Node]types.Object),
			Selections: make(map[*ast.SelectorExpr]*types.Selection),
			Scopes:     make(map[ast.Node]*types.Scope),
		},
	}
	var (
		files       = make([]*ast.File, len(pkg.compiledGoFiles))
		parseErrors = make([]error, len(pkg.compiledGoFiles))
		wg          sync.WaitGroup
	)
	for i, ph := range pkg.compiledGoFiles {
		wg.Add(1)
		go func(i int, ph source.ParseGoHandle) {
			defer wg.Done()

			files[i], _, parseErrors[i], _ = ph.Parse(ctx)
		}(i, ph)
	}
	wg.Wait()

	for _, e := range parseErrors {
		if e != nil {
			rawErrors = append(rawErrors, e)
		}
	}

	var i int
	for _, f := range files {
		if f != nil {
			files[i] = f
			i++
		}
	}
	files = files[:i]

	// Use the default type information for the unsafe package.
	if pkg.pkgPath == "unsafe" {
		pkg.types = types.Unsafe
	} else if len(files) == 0 { // not the unsafe package, no parsed files
		return nil, errors.Errorf("no parsed files for package %s", pkg.pkgPath)
	} else {
		pkg.types = types.NewPackage(string(m.pkgPath), m.name)
	}

	cfg := &types.Config{
		Error: func(e error) {
			rawErrors = append(rawErrors, e)
		},
		Importer: importerFunc(func(pkgPath string) (*types.Package, error) {
			dep := deps[packagePath(pkgPath)]
			if dep == nil {
				return nil, errors.Errorf("no package for import %s", pkgPath)
			}
			depPkg, err := dep.check(ctx)
			if err != nil {
				return nil, err
			}
			pkg.imports[depPkg.pkgPath] = depPkg
			return depPkg.types, nil
		}),
	}
	check := types.NewChecker(cfg, fset, pkg.types, pkg.typesInfo)

	// Type checking errors are handled via the config, so ignore them here.
	_ = check.Files(files)
	// If the context was cancelled, we may have returned a ton of transient
	// errors to the type checker. Swallow them.
	if ctx.Err() != nil {
		return nil, ctx.Err()
	}

	// We don't care about a package's errors unless we have parsed it in full.
	if mode == source.ParseFull {
		for _, e := range rawErrors {
			srcErr, err := sourceError(ctx, fset, pkg, e)
			if err != nil {
				log.Error(ctx, "unable to compute error positions", err, telemetry.Package.Of(pkg.ID()))
				continue
			}
			pkg.errors = append(pkg.errors, srcErr)
		}
	}

	return pkg, nil
}

// An importFunc is an implementation of the single-method
// types.Importer interface based on a function value.
type importerFunc func(path string) (*types.Package, error)

func (f importerFunc) Import(path string) (*types.Package, error) { return f(path) }
