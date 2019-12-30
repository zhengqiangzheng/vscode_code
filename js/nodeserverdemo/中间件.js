let express = require('express');
let bodyparser = require('body-parser');
let app = express();
//全局中间件的第一种写法，写法死不灵活
// app.use(function(request, response, next) {
//   if (request.get('host') !== 'localhost:3000') {
//     response.send('禁止非法请求');
//   } else {
//     next();
//   }
// });
//全局中间件的第二种写法,灵活
function myMiddleWare(request, response, next) {
  if (request.get('host') !== 'localhost:3000') {
    response.send('禁止非法请求');
  } else {
    next();
  }
}
//第三方中间件body parser
// app.use(bodyparser.urlencoded({ extended: true }));
//内置中间件
app.use(express.urlencoded({ extended: true }));
//暴露静态资源,我这里是因为傻逼 js文件和nodemodule在同一级目录所以得这样写，正常的话是写asset就可以了
app.use(express.static('./js/nodeserverdemo/asset'));

app.get('/', myMiddleWare, (req, rep) => {
  rep.send('我是root路由');
});
app.get('/meishi', (req, rep) => {
  rep.send('我是美食路由');
});
app.post('/bodytest', (req, rep) => {
  console.log(req.body);
  rep.send('bodyparser 测试成功');
});

app.listen('3000', err => {
  if (!err) {
    console.log('success connected');
  } else {
    console.log(err);
  }
});
