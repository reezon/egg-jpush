'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    // await this.app.jpush.sendToOne('120c83f7601980a06c3', 'hello world')
    this.ctx.body = 'hi, ' + this.app.plugins.jpush.name
  }
}

module.exports = HomeController
