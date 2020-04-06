let ipUrl = 'http://127.0.0.1:7001/admin/';
let servicePath = {
  checkLogin: ipUrl + 'checkLogin', //  检查用户名密码是否正确
  getTypeInfo: ipUrl + 'getTypeInfo', //  检查用户名密码是否正确
  addArticle: ipUrl + 'addArticle', //  添加文章
  updateArticle: ipUrl + 'updateArticle', //  更新文章
  getArticleList: ipUrl + 'getArticleList', // 文章列表
  delArticle: ipUrl + 'delArticle/', // 删除文章
  getArticleByID: ipUrl + 'getArticleByID/',
};
export default servicePath;
