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

  async updateArticle() {
    const { ctx } = this;
    const res = await ctx.service.article.updateArticle(ctx.query);
    ctx.body = res;
  }

  async deleteArticle() {
    const { ctx } = this;
    const params = {
      id: ctx.query.id,
    }
    const res = await ctx.service.article.deleteArticle(params);
    ctx.body = res;
  }
  
}

module.exports = ArticleController;
