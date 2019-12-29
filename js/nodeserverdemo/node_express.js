let express = require('express');
let app = express();
app.disable('x-powered-by'); // 向客户端屏蔽服务器的信息
app.get('/meishi', (request, response) => {
  console.log(request.query); //url参数对象
  response.send('欢迎来到美食界面');
});
app.post('/waimai', (request, response) => {
  response.send('欢迎来到post外卖');
});
app.get('/waimai', (request, response) => {
  response.send('欢迎来到get外卖');
});
app.get('/', (request, response) => {
  response.send('欢迎来到默认页面');
});
app.listen('3000', err => {
  if (!err) {
    console.log('connect successfully');
  } else {
    console.log(err);
  }
});
