let add2: (x: number, y: number) => number;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
let lib: Lib = (() => {}) as Lib;
lib.version = '1.0';
lib.doSomething = () => {};

function add3(...rest: number[]): number;
function add3(...rest: string[]): string;
//函数重载
function add3(...rest: any[]): any {
  if (typeof rest[0] === 'string') {
    return rest.join('');
  }
  if (typeof rest[0] === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
