let { Router } = require('express');
let { resolve } = require('path');
let uiRouter = new Router();
//页面路由
uiRouter.get('/login', (request, response) => {
  let loginPath = resolve(__dirname, '../public/login.html');
  response.sendfile(loginPath);
});
uiRouter.get('/register', (request, response) => {
  let registerPath = resolve(__dirname, '../public/register.html');
  response.sendfile(registerPath);
});
module.exports = uiRouter;
