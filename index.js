'use strict';
const backgroundColor = '#fafafa';
const darkBackgroundColor = '#f6f6f6';
const foregroundColor = '#383a42';
const red = '#e45649';
const green = '#50a14f';
const yellow = '#c18401';
const blue = '#4078f2';
const darkBlue = '#475fd7';
const magenta = '#a626a4';
const cyan = '#0184bc';
const white = '#a0a1a7';
const lightBlack = '#696c77';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: backgroundColor,
  cursorColor: foregroundColor,
  colors: {
    black: backgroundColor,
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
    lightWhite: foregroundColor
  },
  css: `
    ${config.css || ''}
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
    .tabs_list {
      background-color: ${darkBackgroundColor} !important;
      border-bottom-color: rgba(0, 0, 0, .15) !important;
    }
    .tab_tab {
      color: ${white} !important;
    }
    .tab_tab.tab_active {
      font-weight: 500;
      background-color: ${backgroundColor};
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
      bottom: -1px;
      width: 2px;
      border-radius: 0;
      background: ${darkBlue};
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
      mix-blend-mode: difference;
    }
  `
});
