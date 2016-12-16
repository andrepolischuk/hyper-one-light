'use strict';
const { decorateConfig } = require('./');
const backgroundColor = 'rgba(250, 250, 250, 0.75)';

exports.onWindow = browserWindow => browserWindow.setVibrancy('medium-light');

exports.decorateConfig = config => Object.assign({}, decorateConfig(config), {
  backgroundColor,
  borderColor: backgroundColor
});
