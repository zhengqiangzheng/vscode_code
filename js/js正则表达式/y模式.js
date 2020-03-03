let str = '123,hello,1433,正则';
let yreg = /\d+/y;
let reg = /\d+/g;
console.log(yreg.exec(str));
console.log(yreg.exec(str)); //y模式只匹配第一个 后面的1433它不匹配了
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
