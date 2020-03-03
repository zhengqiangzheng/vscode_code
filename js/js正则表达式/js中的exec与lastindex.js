let str = 'zhe';
let reg = /\w/g;
console.log(str.match(/\w/)); //有index等属性 [ 'z', index: 0, input: 'zhengqiang', groups: undefined ]

console.log(str.match(/\w/g)); //无index属性 ['z', 'h', 'e', 'n', 'g', 'q', 'i', 'a', 'n', 'g']

// console.log(reg.exec(str)); //[ 'z', index: 0, input: 'zhengqiang', groups: undefined ]
// console.log(reg.exec(str)); //[ 'z', index: 0, input: 'zhengqiang', groups: undefined ]
// console.log(reg.exec(str)); //[ 'z', index: 0, input: 'zhengqiang', groups: undefined ]
// console.log(reg.exec(str)); //[ 'z', index: 0, input: 'zhengqiang', groups: undefined ]
// console.log(reg.lastIndex);
// console.log(reg.exec(str)); //[ 'h', index: 1, input: 'zhengqiang', groups: undefined ]
// console.log(reg.lastIndex);
// console.log(reg.exec(str)); //[ 'e', index: 2, input: 'zhengqiang', groups: undefined ]
// console.log(reg.exec(str)); //[ 'e', index: 2, input: 'zhengqiang', groups: undefined ]
// console.log(reg.lastIndex);
// while (reg.exec(str) != null) {
//   console.log(reg.exec(str));
// }
while ((res = reg.exec(str))) {
  console.log(res);
}
