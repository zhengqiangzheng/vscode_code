let str = `
https://www.baidu.com
https://www.youtube.com
http://vuejs.org
`;
let reg = /https?:\/\/((?:\w+\.)\w+\.(?:com|org|cn))/gi;
console.log(str.match(reg));
