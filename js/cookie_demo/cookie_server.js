let express = require('express');
let app = express();
let { resolve } = require('path');
let cookieParser = require('cookie-parser');
let publicpath = resolve(__dirname, 'public');
app.use(express.static(publicpath));
app.use(cookieParser());

app.get('/cookieTest', (request, response) => {
  //response.cookie('cookie1', 'hello'); // 会话cookie 关了浏览器就没了
  response.cookie('cookie', 'hello', { maxAge: 30 * 1000 * 2 }); // 设置过期时间
  response.send('success make cookie');
});

app.get('/readCookie', (request, response) => {
  //request.cookies 读取cookie 为{cookie: hello}
  response.send(`I have readed you cookie ${request.cookies.cookie}`);
});
app.get('/delCookie', (request, response) => {
  response.cookie('cookie', '', { maxAge: 0 }); //第一种
  response.send('success del cookie');
  //response.clearCookie('cookie'); //第二种方式
});

app.listen('3000', error => {
  if (!error) {
    console.log('success start server');
  } else {
    console.log(error);
  }
});
