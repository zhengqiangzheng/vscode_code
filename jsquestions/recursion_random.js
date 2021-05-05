//用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
function GetArr(arr, min, max, len) {
  arr.push(parseInt(Math.random() * (max - min + 1) + (min - 0)));
  arr = [...new Set(arr)];
  if (arr.length == len) {
    return arr;
  }
  return GetArr(arr, min, max, len);
}
let result = GetArr([], 2, 32, 5);
console.log(result);
