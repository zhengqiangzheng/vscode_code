let reg = /(?<!.*2020.*)\d{1}$/g;
let str1 = '123123123';
let str2 = '123123123202011';

console.log(reg.exec(str1));
console.log(reg.exec(str2));
