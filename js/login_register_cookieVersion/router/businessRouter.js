let { resolve } = require('path');
let login_model = require('../model/login_model');
let mongoose = require('mongoose');
let { Router } = require('express');
let businessRouter = new Router();
//登录，根据用户名密码查询数据库
businessRouter.post('/login', async (request, response) => {
  debugger;
  console.log(request.body);
  const { name, password } = request.body;
  //定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/;
  const errorMsg = {};
  //使用正则进行校验
  if (!emailReg.test(name)) {
    //response.send('邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位')
    //return
    errorMsg.emailErr =
      '邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位';
  }
  if (!passwordReg.test(password)) {
    // response.send('密码输入不合法，密码应为6-16位字符不包含特殊字符')
    // return
    errorMsg.passwordErr = '密码输入不合法，密码应为6-16位字符不包含特殊字符';
  }
  console.log(JSON.stringify(errorMsg));
  if (JSON.stringify(errorMsg) !== '{}') {
    console.log(123);
    response.render('login', { errorMsg });
    return;
  }
  try {
    let result = await login_model.findOne({ name, password });
    console.log(result);
    if (result) {
      //response.redirect(`/usercenter?username=${result.nick_name}`);
      response.cookie('_id', result._id.toString(), { maxAge: 3 * 1000 * 10 });
      response.redirect('usercenter');
      return;
    } else {
      errorMsg.loginErr = '登陆失败，用户名或密码错误';
      response.render('login', { errorMsg });
    }
  } catch (error) {
    console.log(error);
    errorMsg.NetWorkErr = '网络错误请稍后重试';
    response.render('login', { errorMsg });
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
  let errorMsg = {};
  //使用正则进行校验
  if (!emailReg.test(name)) {
    errorMsg.emailErr =
      '邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位';
  }
  if (!nickNameReg.test(nick_name)) {
    errorMsg.nickNameErr = '昵称输入不合法，昵称应为中文';
  }
  if (!passwordReg.test(password)) {
    errorMsg.passwordErr = '密码输入不合法，密码应为6-16位字符不包含特殊字符';
  }
  if (password !== re_password) {
    errorMsg.RepasswordErr = '两次输入密码不一致';
  }
  if (JSON.stringify(errorMsg) !== '{}') {
    response.render('register', { errorMsg }); //有错误直接带着错误回到注册页面
    return;
  }
  try {
    let findResult = await login_model.findOne({ name });
    if (findResult) {
      errorMsg.emailErr = `注册失败，${name}邮箱已经被注册了`;
      response.render('register', { errorMsg });
      return;
    } else {
      await login_model.create({ name, nick_name, password });
      console.log(`邮箱为：${name}，昵称为:${nick_name}的用户注册成功了！`);
      response.redirect(`/login?name=${name}`);
    }
  } catch (error) {
    errorMsg.netWorkErr = '阿偶，网络不稳定，稍后重试！';
    console.log(error);
    response.render('register', { errorMsg });
    return;
  }
});
module.exports = businessRouter;
