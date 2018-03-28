'use strict'
const mount = require('./lib/jpush')
module.exports = app => {
  if (app.config.jpush.app) mount(app)
}
