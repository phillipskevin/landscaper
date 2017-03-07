import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  page: 'string',
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'landscaper',
    serialize: false
  }
});

route('{page}');

export default AppViewModel;
