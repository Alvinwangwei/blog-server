const Service = require('egg').Service;

class ArticleService extends Service {
  async readArticle() {
    const articles = await this.app.mysql.select('blog_article')
    return articles
  }
  // async find(uid) {
  //   const { app } = this;
  //   const user = await app.mysql.query('select * from Person  where PersonId = ?', uid);
  //   return user;
  // }
  // async create(info) {
  //   const { app } = this;
  //   const user = await app.mysql.insert('Person', info);
  //   return user;
  // }

  // async read() {
  //   const person = await this.app.mysql.select('Person')
  //   return person
  // }

  // async update() {
  //   const row = {
  //     PersonId: 3,
  //     FirstName: 'w',
  //     LastName: 'w'
  //   }

  //   const options = {
  //     where: {
  //       PersonId: 1
  //     }
  //   }
    
  //   const result = await this.app.mysql.update('Person', row, options)
  //   console.log(result) 
  //   return result
  // }

  // async delete() {
  //   const result = this.app.mysql.delete('Person', {
  //     PersonId: 3
  //   })
  // }

}

module.exports = ArticleService;