'use strict';
const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi app';
  }
  async checkLogin() {
    let userName = this.ctx.request.body.userName;
    let passWord = this.ctx.request.body.password;
    const sql =
      " SELECT userName FROM admin_user WHERE userName = '" +
      userName +
      "' AND password = '" +
      passWord +
      "'";
    const res = await this.app.mysql.query(sql);
    console.log(res);
    if (res.length > 0) {
      let openId = new Date().getTime();
      this.ctx.session.openId = { openId: openId };
      this.ctx.body = { data: '登陆成功', openId: openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
}
module.exports = MainController;
