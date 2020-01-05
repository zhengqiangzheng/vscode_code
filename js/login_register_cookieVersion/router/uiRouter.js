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
  var { _id } = request.cookies;
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
