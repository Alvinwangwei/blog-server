'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getArticleList', controller.article.getArticleList);
  router.get('/getArticleInfo', controller.article.getArticleInfo);
  router.post('/updateArticle', controller.article.updateArticle);
  router.post('/deleteArticle', controller.article.deleteArticle);
};