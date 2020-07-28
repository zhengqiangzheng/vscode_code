function createClosure() {
  let i = 1;
  return function () {
    console.log(i);
  };
}
const fn = createClosure();
fn();

function f(fn, x) {
  if (x < 1) {
    f(g, 1);
  } else {
    let x = fn();
    console.log(x);
  }
  function g() {
    console.log(x);
  }
}
function h() {}
var x = f(h, -1);
