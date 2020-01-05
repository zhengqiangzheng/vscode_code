let express = require('express');
let db = require(__dirname + '/db');
let uiRouter = require('./router/uiRouter');
let businessRouter = require('./router/businessRouter');
//引入express-session用于在express中操作session
let session = require('express-session');
//引入connect-mongo用于session持久化
const MongoStore = require('connect-mongo')(session);
let { resolve } = require('path');
let app = express();
app.set('view engine', 'ejs'); //设置模板引擎
let viewPath = resolve(__dirname, './views'); //设置模板所在目录
app.set('views', viewPath);
//定义一个cookie和session组合使用的配置对象

app.use(
  session({
    name: 'haha', //设置cookie的name，默认值是：connect.sid
    secret: 'zzz', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否在存储内容之前创建会话
    resave: true, //是否在每次请求时，强制重新保存session，即使他们没有变化
    store: new MongoStore({
      url: 'mongodb://localhost:27017/cookies_container',
      touchAfter: 1800 //修改频率（例：//在24小时之内只更新一次）
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过 JS 操作cookie
      maxAge: 1000 * 30 // 设置cookie的过期时间
    }
  })
);
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
