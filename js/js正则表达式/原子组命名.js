let str = '<span>hello world</span>';
console.log(str.replace(/<(span)>(?<con>[\s\S]+?)<\/\1>/g, '<h4>$<con></h4>')); //?<con> 为$1取别名

let linkstr = `
<a id='123' href="https://www.baidu.com">百度</a>
<a id='456' href="https://www.taobao.com">淘宝</a>
<a id='789' href="https://www.jingdong.com">京东</a>

`;
let matchobj = linkstr.matchAll(
  /<a.*? href=(['"])(?<link>.*?)\1>(?<title>.*?)<\/a>/g
);
for (const iterator of matchobj) {
  console.log(iterator['groups']);
}
