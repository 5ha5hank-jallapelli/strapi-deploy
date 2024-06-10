'use strict';

/**
 * location-tracking router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::location-tracking.location-tracking', {
  config: {
    find: {
      middlewares: ['api::location-tracking.location-tracking']
    },
    findOne: {
      middlewares: ['api::location-tracking.location-tracking']
    }
  }
});
