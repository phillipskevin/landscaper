import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'landscaper/models/test';

import 'landscaper/login/login-test';

import 'landscaper/auth/auth-test';

import 'landscaper/jobs/jobs-test';

F.attach(QUnit);

QUnit.module('landscaper functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('landscaper main page shows up', function() {
  F('title').text('landscaper', 'Title is set');
});
