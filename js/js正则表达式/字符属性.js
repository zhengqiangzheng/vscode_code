//每个字符都有属性，如L属性表示是字母，P 表示标点符号，需要结合 u 模式才有效
let str = '郑强zhengqiang123..';
console.log(str.match(/\p{L}/gu));
console.log(str.match(/\p{P}/gu));
// \p{sc=xxx} Han 就是汉语 其他支持的语言 :http://www.unicode.org/standard/supported.html
let hd = `
张三:010-99999999,李四:020-88888888`;
let res = hd.match(/\p{sc=Han}+/gu);
console.log(res);
let str1 = '𝒳𝒴';
console.table(str1.match(/[𝒳𝒴]/gu)); //结果为乱字符"�"
console.table(str1.match(/[𝒳𝒴]/));
