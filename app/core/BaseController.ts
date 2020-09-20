const Controller = require('egg').Controller

class BaseMongooseController extends Controller {

  async returnService(promise) {
    const [ error, data ] = await this.wapperError(promise)
    if(error) {
      this.error(error)
    } else {
      this.success(data)
    }
  }

  success(data) {
    this.ctx.body = {status: 'OK', data}
  }

  error(error) {
    this.ctx.body = {status: 'NG', error: error.message || error}
  }

  wapperError(promise) {
    return promise
      .then(data => {
        return [undefined, data]
      })
      .catch(err => [err])
  }
}

module.exports = BaseMongooseController;