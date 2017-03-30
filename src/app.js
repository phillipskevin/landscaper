/* global window, localStorage */
import DefineMap from 'can-define/map/';
import route from 'can-route';
import platform from 'steal-platform';
import 'feathers-authentication-popups';

import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  init() {
    window.authAgent.on('login', token => {
      this.code = token;
      this.page = 'jobs';
    });
  },

  authenticated: {
    get() {
      return !!this.code;
    },
    serialize: false
  },

  page: {
    get(lastSetVal) {
      return (this.authenticated || lastSetVal === 'auth') ? lastSetVal : 'login';
    },
    set(val) {
      return val;
    }
  },

  // auth code
  code: {
    type: 'string',
    set(val) {
      if (platform.isDesktopBrowser) {
        localStorage.setItem('feathers-jwt', val);
      }
      return val;
    },
    serialize: false
  },

  title: {
    value: 'landscaper',
    serialize: false
  }
});

route('{page}');

export default AppViewModel;
