'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticleList() {
    const { ctx, service } = this;
    
    const articles = await ctx.service.article.readArticle();
    ctx.body = articles;
  }
}

module.exports = ArticleController;
