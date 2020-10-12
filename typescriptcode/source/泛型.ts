function join<T>(first: T, second: T) {
  return `${first}${second}`;
}
//泛型数组
function myFun<T>(params: Array<T>) {
  return params;
}
function myfunc2<T>(params: T[]) {
  return params;
}
