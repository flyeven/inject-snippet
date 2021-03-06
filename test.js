'use strict';

/* deps: mocha */
var should = require('should');
var inject = require('./');

describe('inject', function () {
  it('should inject a snippet into a string with placeholders:', function () {
    var str = 'before <!-- snippet --> after';
    var actual = inject(str, 'foo');
    actual.should.equal('before <!-- snippet -->foo<!-- endsnippet --> after');
  });

  it('should inject a snippet into a string without placeholders:', function () {
    var str = 'before <!-- snippet --> after';
    inject(str, 'foo', {placeholders: false}).should.equal('before foo after');
  });

  it('should throw an error when invalid arguments are passed:', function () {
    (function () {
      inject();
    }).should.throw('expected a string as the first argument.');
  });
});
