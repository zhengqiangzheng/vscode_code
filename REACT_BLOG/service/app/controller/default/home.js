'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('type', {});
    console.log(result);
    this.ctx.body = result;
  }
  async getArticleList() {
    let sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H-%i-%s') as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { result };
  }
  async getArticleById() {
    let id = this.ctx.params.id;
    let sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H-%i-%s') as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'type.id as typeId' +
      'FROM article LEFT JOIN type ON article.type_id = type.id ' +
      'WHERE article.id=' +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { result };
  }
}

module.exports = HomeController;
