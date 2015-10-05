QUnit.test("Any function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(any([true, true, true]) === true, "[true, true, true] passes.");
  assert.ok(any([false, true, false]) === true, "[false, true, false] passes.");
  assert.notOk(any([false, false, false]) === true, "[false, false, false] passes.");
  
  any([true, true], function(ok) {
    assert.ok(ok, "Callback executed.");
    done1();
  });
});

QUnit.test("All function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(all([true, true, true]) === true, "[true, true, true] passes.");
  assert.ok(all([1 === 1, 2 === 2]) === true, "[1 === 1, 2 === 2] passes.");
  assert.notOk(all([true, true, false]) === true, "[true, true, false] passes.");
  
  all([true, true], function(ok) {
    assert.ok(ok, "Callback executed.");
    done1();
  });
});

QUnit.test("First function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(first([1, 2, 3]) === 1, "first [1, 2, 3] === 1 passed.");
  assert.notOk(first([1, 2, 3]) === 2, "first [1, 2, 3] === 2 passed.");
  
  first([1, 2, 3], function(f) {
    assert.ok(f === 1, "First element is 1.");
    done1();
  });
});

QUnit.test("Nth function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(nth([1, 2, 3], 1) === 2, "nth [1, 2, 3] === 1 passed.");
  assert.notOk(nth([1, 2, 3], 1) === 3, "nth [1, 2, 3] === 3 passed.");

  nth([1, 2, 3], 1, function(n) {
    assert.ok(n === 2, "Correct nth value.");
    done1();
  });
});

QUnit.test("Last function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(last([1, 2, 3]) === 3, "last [1, 2, 3] === 3 passed.");
  assert.notOk(last([1, 2, 3]) === 2, "last [1, 2, 3] === 2 passed.");
  
  last([1, 2, 3], function(l) {
    assert.ok(l === 3, "Last element found.");
    done1();
  });
});

QUnit.test("Rest function", function(assert) {
  var done1 = assert.async();
  
  assert.ok(rest([1, 2, 3]).join('') === [2, 3].join(''), "rest [1, 2, 3] === [2, 3] passed.");
  assert.notOk(rest([1, 2, 3]).join('') === [1, 2, 3].join(''), "rest [1, 2, 3] === [1, 2, 3] passed.");

  rest([1, 2, 3], function(r) {
    assert.ok(r.join('') === [2, 3].join(''), "Arrays appear to be the same.");
    done1();
  });
});