//
// Lesson 1
// Observable streams
//

var Rx = require('rx');
var assert = require('assert');

describe('lesson 1', function() {
  it('sample subscription', function() {
    Rx.Observable
      .just(45)
      .subscribe(function(x) { assert.equal(x, ________); });
  });

  it('simple return', function() {
    var result = '';

    Rx.Observable
      .just('foo')
      .subscribe(function(x) { result = x; });

    assert.equal(result, ________);
  });

  it('the last event', function() {
    var result = '';
    var strings = ['foo','bar'];

    Rx.Observable
      .fromArray(strings)
      .subscribe(function(x) { result = x; });

    assert.equal(result, ________);
  });

  it('everything counts', function() {
    var result = 0;
    var numbers = [1, 2, 3];

    Rx.Observable
      .fromArray(numbers)
      .subscribe(function(x) { result += x; });

    assert.equal(result, ________);
  });

  it('rest on sunday', function() {
    var result = [];

    Rx.Observable
      .range(1, 7)
      .subscribe(function(d) {
        result.push(d === 7 ? 'rest' : ________);
      });

    assert.equal(result.join(' '), 'work work work work work work rest');
  });

  it('nothing listens until you subscribe', function() {
    var sum = 0;
    var number$ = Rx.Observable
      .range(1, 10)
      .tap(function(n) { sum += n; });

    assert.equal(sum, 0);

    number$.________();

    assert.equal(sum, 55);
  });
});
