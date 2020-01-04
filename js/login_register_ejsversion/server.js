let express = require('express');
let db = require(__dirname + '/db');
let uiRouter = require('./router/uiRouter');
let businessRouter = require('./router/businessRouter');
let { resolve } = require('path');
let app = express();
app.set('view engine', 'ejs'); //设置模板引擎
let viewPath = resolve(__dirname, './views'); //设置模板所在目录
app.set('views', viewPath);
let public_path = resolve(__dirname, 'public');
//数据库连接成功后注册路由
db.then(result => {
  app.use(express.urlencoded({ extended: true })); //使用内部中间件可以访问request .body
  app.use(uiRouter);
  app.use(businessRouter);
  //暴露静态资源，可以通过xxx.html访问页面
  app.use(express.static(public_path));
}).catch(err => {
  console.log('数据库连接失败', err);
});
//启动服务器并连接数据库
app.listen('3000', err => {
  if (!err) {
    console.log('success connected');
  } else {
    console.log(err);
  }
});
