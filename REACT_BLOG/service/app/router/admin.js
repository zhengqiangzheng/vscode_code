module.exports = (app) => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.main.index);
  router.get(
    '/admin/getArticleList',
    adminauth,
    controller.admin.main.getArticleList
  );
  router.get(
    '/admin/getTypeInfo',
    adminauth,
    controller.admin.main.getTypeInfo
  );
  router.get(
    '/admin/getArticleByID/:id',
    adminauth,
    controller.admin.main.getArticleByID
  );
  router.get(
    '/admin/delArticle/:id',
    adminauth,
    controller.admin.main.delArticle
  );
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
  router.post(
    '/admin/updateArticle',
    adminauth,
    controller.admin.main.updateArticle
  );
};
