'use strict'

var JPushSdk = require('jpush-sdk')
const assert = require('assert')

class Jpush {
  constructor (app) {
    this.config = app.config.jpush
  }

  /**
  * send message to one person
  * @param {String} registratonId - registratonId
  * @param {String} content - content
  * @param {Object} extras - extras
  */
  async sendToOne (registratonId, content, extras = {}) {
    return await this.sendMessage({registration_id: [registratonId]}, content, extras)
  }

  /**
  * send message to all person
  * @param {String} content - content
  * @param {Object} extras - extras
  */
  async sendToAll (content, extras = {}) {
    return await this.sendMessage('all', content, extras)
  }

  /**
  * send message to some person
  * @param {Object} registratonIds - registratonIds
  * @param {String} content - content
  * @param {Object} extras - extras
  */
  async sendToSome (registratonIds, content, extras = {}) {
    return await this.sendMessage({registration_id: registratonIds}, content, extras)
  }

  async sendMessage (audience, alert, extras) {
    const { appKey, masterSecret, isDebug, appName } = this.config
    const client = JPushSdk.buildClient({appKey, masterSecret, isDebug})
    return new Promise(function (resolve, reject) {
      client.push()
            .setPlatform(JPushSdk.ALL)
            .setAudience(audience)
            .setOptions(null, null, null, true)
            .setNotification(JPushSdk.ios(alert, '', 1, null, extras), JPushSdk.android(alert, appName, 0, extras), JPushSdk.winphone(alert, appName, null, extras))
            .send(function (err, res) {
              if (err) {
                return reject(err.message)
              } else {
                return resolve()
              }
            })
    })
  }
}

const mount = app => {
  const { appKey, masterSecret, isDebug, appName } = app.config.jpush
  assert(appKey, `[egg-jpush] appKey: ${appKey}`)
  assert(masterSecret, `[egg-jpush] masterSecret: ${masterSecret}`)
  assert(appName, `[egg-jpush] appName: ${appName}`)
  app.jpush = new Jpush(app)
}
module.exports = mount
