import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './login.stache';
import openLoginPopup from 'feathers-authentication-popups';

import './login.less';

export const ViewModel = DefineMap.extend({
  openLoginPopup
});

export default Component.extend({
  tag: 'ls-login',
  ViewModel,
  view
});
