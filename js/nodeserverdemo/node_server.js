let http = require('http');
let { parse } = require('querystring');
http
  .createServer(function(request, response) {
    let urlstr = request.url.split('?')[1];
    console.log(urlstr);
    let urlobj = parse(urlstr);
    response.setHeader('content-type', 'text/html;charset=utf-8');
    console.log(urlobj);
    if (urlobj.name === 'zhangsan') {
      response.end('<h1>hello zs</h1>');
    } else if (urlobj.name === 'lisi') {
      response.end('<h1>hello lisi</h1>');
    } else {
      response.end('<h1>hello everyone</h1>');
    }
  })
  .listen(3000, err => {
    if (!err) {
      console.log('服务器启动成功');
    } else {
      console.log('服务器启动失败');
    }
  });
