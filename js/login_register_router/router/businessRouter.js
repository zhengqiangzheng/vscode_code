let login_model = require('../model/login_model');
let mongoose = require('mongoose');
let { Router } = require('express');
let businessRouter = new Router();
//登录，根据用户名密码查询数据库
businessRouter.post('/login', async (request, response) => {
  console.log(request.body);
  const { name, password } = request.body;
  //这里就不校验用户名密码了,懒~~
  //将数据库相关密码包在trycatch中
  try {
    let result = await login_model.findOne({ name, password });
    if (result) {
      response.redirect('https:www.baidu.com');
      return;
    } else {
      response.send('登陆失败，用户名或密码错误');
      return;
    }
  } catch (error) {
    console.log(error);
    response.send('网络不稳定请稍后重试');
    return;
  }
});
//用户注册
businessRouter.post('/register', async (request, response) => {
  //1.获取用户的输入
  const { name, nick_name, password, re_password } = request.body;
  //2.校验数据的合法性
  //定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
  const nickNameReg = /[\u4e00-\u9fa5]/gm;
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/;
  //使用正则进行校验
  if (!emailReg.test(name)) {
    response.send(
      '邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位'
    );
    return;
  } else if (!nickNameReg.test(nick_name)) {
    response.send('昵称输入不合法，昵称应为中文');
    return;
  } else if (!passwordReg.test(password)) {
    response.send('密码输入不合法，密码应为6-16位字符不包含特殊字符');
    return;
  } else if (password !== re_password) {
    response.send('两次输入密码不一致');
    return;
  }
  try {
    let findResult = await login_model.findOne({ name });
    if (findResult) {
      response.send(`注册失败，${name}邮箱已经被注册了`);
      return;
    } else {
      await login_model.create({ name, nick_name, password });
      console.log(`邮箱为：${name}，昵称为:${nick_name}的用户注册成功了！`);
      response.send('注册成功了！');
    }
  } catch (error) {
    //1.计数 2.引入警报模块
    console.log(error);
    response.send('阿偶，网络不稳定，稍后重试！');
  }
});
module.exports = businessRouter;
