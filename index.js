'use strict';
const foregroundColor = '#383a42';
const red = '#e45649';
const green = '#50a14f';
const yellow = '#c18401';
const blue = '#4078f2';
const magenta = '#a626a4';
const cyan = '#0184bc';
const white = '#a0a1a7';
const lightBlack = '#696c77';

exports.decorateConfig = config => {
  const backgroundColor = config.enableVibrancy ? 'transparent' : '#fafafa';

  const decoratedConfig = Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: backgroundColor,
    cursorColor: '#526eff',
    colors: {
      black: foregroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: backgroundColor
    },
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .splitpane_divider {
        background-color: #e5e5e6 !important;
      }
      .tabs_list {
        margin-left: 0 !important;
        padding-left: 76px;
        background-color: ${backgroundColor} !important;
      }
      .tabs_list::before {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        width: 76px;
        background-color: rgba(125, 125, 125, 0.15) !important;
        border-bottom: 1px solid #ccc;
      }
      .tab_tab {
        color: ${white} !important;
        background-color: rgba(125, 125, 125, 0.15) !important;
        border-color: #ccc !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor} !important;
        border-color: rgba(0, 0, 0, .25) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        z-index: 2;
        top: 0px;
        left: -1px;
        bottom: 0;
        width: 2px;
        border-radius: 0;
        background-color: #475fd7;
        opacity: 0;
        transition: opacity .16s;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: ${lightBlack} !important;
      }
      .tab_tab.tab_hasActivity {
        color: ${blue} !important;
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: multiply;
      }
      .cursor-node[focus="false"] {
        opacity: 0 !important;
      }
    `
  });

  exports.onWindow = browserWindow => {
    if (config.enableVibrancy === true) {
      browserWindow.setVibrancy('light');
    }
  };

  return decoratedConfig;
};
