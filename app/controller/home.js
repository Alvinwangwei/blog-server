'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    // const res = await service.home.find(1);
    // const res = await service.home.create({
    //   PersonId: '2',
    //   FirstName: 'qing',
    //   LastName: 'guiliu'
    // })
    // const res = await service.home.update();
    // ctx.body = res;
    const res = await service.home.delete();
    ctx.body = res;
  }
}

module.exports = HomeController;
