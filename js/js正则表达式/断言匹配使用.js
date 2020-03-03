let str = `<a href='http://www.baidu.com'>12321</a>
<a href='http://www.baidu.com'>12321</a><a href='http://www.baidu.com'>12321</a>
`;

//使用断言匹配网址

console.log(str.match(/(?<=href=(['"])).*?(?=\1)/g)); // 前面是href=' 并且后面是 '的内容

let phonenum = '13112222222 13333330099';
console.log(
  phonenum.replace(/(?<=\d{7})\d{4}/g, p0 => {
    return '*'.repeat(4);
  })
);

//显示用户输入的内容
let str2 = 'zqerqwerdaads';
let str3 = 'zqerqwerdaads2020';
let reg = /^(?!.*2020.*)/g; //后面不是什么?!
console.log(reg.test(str2));
console.log(reg.test(str3));

//匹配前面不是数字的字母

let hd = 'zhenge131zdasdfa'; //应该是zhenge  前面不是什么 ?<!
console.log(/(?<!\d+)[a-z]+/g.exec(hd));
