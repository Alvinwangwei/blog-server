'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticleList() {
    const { ctx } = this;
    const articles = await ctx.service.article.readArticle();
    ctx.body = articles;
  }

  async getArticleInfo() {
    const { ctx } = this;
    const id = ctx.query.id;
    const article = await ctx.service.article.findArticle(id);
    ctx.body = article;
  }
}

module.exports = ArticleController;
