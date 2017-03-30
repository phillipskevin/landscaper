/* global window */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './auth.less';
import view from './auth.stache';

export const ViewModel = DefineMap.extend({ });

export default Component.extend({
  tag: 'ls-auth',
  ViewModel,
  view,
  events: {
    inserted() {
      window.opener.authAgent.emit('login', this.viewModel.code);
      window.close();
    }
  }
});
