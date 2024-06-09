'use strict';

/**
 * remote-commands-android router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::remote-commands-android.remote-commands-android', {
  config: {
    find: {
      middlewares: ['api::remote-commands-android.remote-commands-android']
    },
    findOne: {
      middlewares: ['api::remote-commands-android.remote-commands-android']
    }
  }
})
