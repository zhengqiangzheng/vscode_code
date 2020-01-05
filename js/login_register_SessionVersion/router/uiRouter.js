let { Router } = require('express');
let { resolve } = require('path');
let cookieParser = require('cookie-parser');
let login_model = require('../model/login_model');
let uiRouter = new Router();
uiRouter.use(cookieParser());
//页面路由
uiRouter.get('/login', (request, response) => {
  const { name } = request.query;
  console.log(name);
  response.render('login', { errorMsg: { name } });
});
uiRouter.get('/register', (request, response) => {
  response.render('register', { errorMsg: {} });
});
uiRouter.get('/usercenter', async (request, response) => {
  //1.获取cookie，读取cookie中session容器编号
  //2.去服务器中匹配该编号对应的session容器
  //3.根据匹配结果，进行具体的业务逻辑
  var { _id } = request.session; //拿着session 的id去找session,然后拿到_id
  if (_id) {
    let result = await login_model.findOne({ _id });
    if (result) {
      response.render('usercenter', { username: result.nick_name });
    } else {
      response.redirect('/login');
    }
  } else {
    response.redirect('/login');
  }
});
module.exports = uiRouter;
