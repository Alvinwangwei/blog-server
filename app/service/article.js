const Service = require('egg').Service;

class ArticleService extends Service {
  async readArticle() {
    const articles = await this.app.mysql.select('blog_article')
    return articles;
  }

  async findArticle(aid) {
    const article = await this.app.mysql.get('blog_article', {article_id: aid});
    return article;
  }

}

module.exports = ArticleService;