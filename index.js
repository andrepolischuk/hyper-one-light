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
  let tabListStyles = '';

  if (process.platform === 'darwin') {
    tabListStyles = `
      .tabs_list {
        margin-left: 0 !important;
        padding-left: 76px;
      }
      .tabs_list::before {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        width: 76px;
        background-color: rgba(50, 50, 50, .09) !important;
        border-bottom: 1px solid rgba(0, 0, 0, .12);
      }
    `;
  }

  const decoratedConfig = Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: 'transparent',
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
      .header_shape,
      .header_appTitle {
        color: ${foregroundColor};
      }
      .splitpane_divider {
        background-color: rgba(0, 0, 0, .12) !important;
      }
      ${tabListStyles}
      .tab_tab {
        color: rgba(0, 0, 0, .3) !important;
        background-color: rgba(50, 50, 50, .09) !important;
        border-color: rgba(0, 0, 0, .12) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: transparent !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: transparent;
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
        color: rgba(0, 0, 0, .57) !important;
      }
      .tab_tab.tab_hasActivity {
        color: ${blue} !important;
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
      x-row a {
        color: ${cyan};
      }
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
