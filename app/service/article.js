const Service = require('egg').Service;
const moment = require('moment')
class ArticleService extends Service {
  async readArticle() {
    const articles = await this.app.mysql.select('articles')
    return articles.map(item => {
      return {
        ...item,
        create_time: moment(new Date(item.create_time)).format('YYYY-MM-DD HH:mm:ss'),
        update_time: moment(new Date(item.update_time)).format('YYYY-MM-DD HH:mm:ss')
      }
    });
  }

  async findArticle(aid) {
    const article = await this.app.mysql.get('articles', {article_id: aid});
    return article;
  }

  async updateArticle(params) {
    const now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    if(params.id) {
      const result = await this.app.mysql.update('articles', {
        id: params.id,
        title: params.title,
        desc: params.desc,
        update_time: now,
        create_by: 'sys'
      })
      return result.affectedRows === 1;
    } else {
      const result = await this.app.mysql.insert('articles', {
        title: params.title,
        desc: params.desc,
        create_time: now,
        update_time: now,
        create_by: 'sys'
      })
      return result.affectedRows === 1;
    }
  }

  async deleteArticle(params) {
    const result = await this.app.mysql.delete('articles', {
      id: params.id
    })
    console.log(result);
    return result.affectedRows === 1;
  }
  
}

module.exports = ArticleService;