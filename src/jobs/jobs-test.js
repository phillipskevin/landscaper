import QUnit from 'steal-qunit';
import { ViewModel } from './jobs';

// ViewModel unit tests
QUnit.module('landscaper/jobs');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the ls-jobs component');
});
