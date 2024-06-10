'use strict';

/**
 * `location-tracking` middleware
 */

const { navbar } = require('../../../extensions/populate-navbar');

const populate = {
  populate: [
    ...navbar,
    'cards'
  ],
  publicationState: 'live'
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In location-tracking middleware.');
    ctx.query = {
      ...populate,
      ...ctx.query
    }

    await next();
  };
};
