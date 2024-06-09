'use strict';

/**
 * `remote-commands-android` middleware
 */

const { navbar } = require('../../../extensions/populate-navbar');

const populate = {
  populate: [
    ...navbar
  ],
  publicationState: 'live'
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In remote-commands-android middleware.');
    ctx.query = {
      ...populate,
      ...ctx.query
    }

    await next();
  };
};
