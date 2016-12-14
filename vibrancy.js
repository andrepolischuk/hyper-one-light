'use strict';
const { decorateConfig } = require('./');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('medium-light');

module.exports.decorateConfig = config => Object.assign({}, decorateConfig(config), {
  backgroundColor: 'transparent'
});
