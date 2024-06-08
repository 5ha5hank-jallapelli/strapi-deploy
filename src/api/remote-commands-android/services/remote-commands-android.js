'use strict';

/**
 * remote-commands-android service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::remote-commands-android.remote-commands-android');
