'use strict';
const backgroundColor = '#fafafa';
const foregroundColor = '#383a42';
const red = '#e45649';
const green = '#50a14f';
const yellow = '#c18401';
const blue = '#4078f2';
const magenta = '#a626a4';
const cyan = '#0184bc';
const lightGrey = '#a0a1a7';
const mediumGrey = '#696c77';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: backgroundColor,
    cursorColor: foregroundColor,
    colors: [
      foregroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      lightGrey,
      mediumGrey,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      backgroundColor
    ],
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: ${backgroundColor} !important;
        border-bottom-color: rgba(0, 0, 0, .15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0, 0, 0, .25) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `
  });
};
