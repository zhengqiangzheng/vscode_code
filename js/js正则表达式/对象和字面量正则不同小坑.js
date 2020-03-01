let str = 12.12;
let regex1 = new RegExp('d+.d+', 'g'); //这里没有插件应该是这样的new RegExp('\d+\.\d+', 'g')
let regex2 = new RegExp('\\d+\\.\\d+', 'g'); //这里是个坑 使用new RegExp需要两个 \\转义 上面没有转义是被我的vscode插件去掉了。。
console.log(/\d+\.\d+/g.test(str));
console.log(regex1.test(str));
console.log(regex2.test(str));

let hd = `
张三:010-9999999,李四:2020-1231234
`;
console.log(hd.match(/[^\s\d-,:]+/g));
