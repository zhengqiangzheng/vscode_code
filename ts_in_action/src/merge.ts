interface A {
  x: number;
}
interface A {
  y: number;
}

let a1: A = {
  x: 1,
  y: 1,
};
namespace Shape {
  const pi = Math.PI;
  export function circle(r: number) {
    return pi * r * r;
  }
}
