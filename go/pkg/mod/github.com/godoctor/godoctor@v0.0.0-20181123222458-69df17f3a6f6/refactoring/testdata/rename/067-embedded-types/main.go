package main

import (
	"fmt"
	"io"
)

func main() {
	type Pt struct { //<<<<<rename,9,7,9,7,XY,pass
		x, y int
	}

	type Pt3 struct {
		Pt
		z int
	}

	type str struct {
		*int //<<<<<rename,19,4,19,4,,XY,fail
		io.Writer
		x int
		Pt3
	}

	i, j := 3, 5
	s := str{&i, nil, 0, Pt3{Pt{1, 2}, 3}}
	s.int = &j
	s.Writer = nil
	fmt.Println(*s.int, s.x, s.Pt3.z, s.Pt3.x, s.Pt3.Pt.x)
}
