function createClosure() {
  let i = 1;
  return function () {
    console.log(i);
  };
}
const fn = createClosure();
function f(fn, x) {
  if (x < 1) {
    f(g, 1);
  } else {
    fn();
  }
  function g() {
    console.log(x);
  }
}
function h() {}
f(h, 0);
