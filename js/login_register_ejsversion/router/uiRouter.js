let { Router } = require('express');
let { resolve } = require('path');
let uiRouter = new Router();
//页面路由
uiRouter.get('/login', (request, response) => {
  const { name } = request.query;
  console.log(name);
  response.render('login', { errorMsg: { name } });
});
uiRouter.get('/register', (request, response) => {
  response.render('register', { errorMsg: {} });
});
module.exports = uiRouter;
