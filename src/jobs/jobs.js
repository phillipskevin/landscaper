import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './jobs.less';
import view from './jobs.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the ls-jobs component'
  }
});

export default Component.extend({
  tag: 'ls-jobs',
  ViewModel,
  view
});
