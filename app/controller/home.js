'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = 'Hello World';
  }
}

module.exports = HomeController;
