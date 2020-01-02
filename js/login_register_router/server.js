let express = require('express');
let db = require(__dirname + '/db');
let uiRouter = require('./router/uiRouter');
let businessRouter = require('./router/businessRouter');
let app = express();
//数据库连接成功后注册路由
db.then(result => {
  app.use(express.urlencoded({ extended: true }));
  app.use(uiRouter);
  app.use(businessRouter);
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
