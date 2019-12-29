/**
 * Buffer 存二进制数据
 * 类数组
 */
let buf1 = Buffer.from('hello');
console.log(buf1);

let buf2 = Buffer.alloc(10);
console.log(buf2);

let buf3 = Buffer.allocUnsafe(10); //效率高 存在安全问题会拿到没用被引用到的数据
console.log(buf3);
