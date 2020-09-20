const BaseController = require('../core/BaseController')

class UserController extends BaseController {
  async add() {
    console.log(this.ctx.service.UserService)
    const { UserService } = this.ctx.service
    const { user_name, age } = this.ctx.request.body
    // console.log('Received: user_name = ' + user_name + ', age = ' + age)
    await this.returnService(UserService.add(user_name, age))
  }
}

module.exports = UserController