import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'landscaper/models/test';

F.attach(QUnit);

QUnit.module('landscaper functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('landscaper main page shows up', function() {
  F('title').text('landscaper', 'Title is set');
});
