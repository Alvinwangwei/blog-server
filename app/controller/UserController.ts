const BaseController = require('../core/BaseController')

class UserController extends BaseController {
  async add() {
    const UserService = this.ctx.service.userService
    const { user_name, age } = this.ctx.request.body
    await this.returnService(UserService.add(user_name, age))
  }
}

module.exports = UserController