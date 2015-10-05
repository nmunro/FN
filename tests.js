QUnit.test("Any function", function(assert) {
  assert.ok(any([true, true, true]) === true, "[true, true, true] passes.");
  assert.ok(any([true, true, false]) === true, "[true, true, false] passes.");
  assert.ok(any([true, false, false]) === true, "[true, false, false] passes.");
  assert.ok(any([true, false, true]) === true, "[true, false, true] passes.");
  assert.ok(any([false, true, true]) === true, "[false, true, true] passes.");
  assert.ok(any([false, true, false]) === true, "[false, true, false] passes.");
  assert.notOk(any([false, false, false]) === true, "[false, false, false] passes.");
});

QUnit.test("All function", function(assert) {
  assert.ok(all([true, true, true]) === true, "[true, true, true] passes.");
  assert.ok(all([1 === 1, 2 === 2]) === true, "[1 === 1, 2 === 2] passes.");
  assert.notOk(all([true, true, false]) === true, "[true, true, false] passes.");
});

QUnit.test("First function", function(assert) {
  assert.ok(first([1, 2, 3]) === 1, "first [1, 2, 3] === 1 passed.");
  assert.notOk(first([1, 2, 3]) === 2, "first [1, 2, 3] === 2 passed.");
});

QUnit.test("Nth function", function(assert) {
  assert.ok(nth([1, 2, 3], 1) === 2, "nth [1, 2, 3] === 1 passed.");
  assert.notOk(nth([1, 2, 3], 1) === 3, "nth [1, 2, 3] === 3 passed.");
});

QUnit.test("Last function", function(assert) {
  assert.ok(last([1, 2, 3]) === 3, "last [1, 2, 3] === 3 passed.");
  assert.notOk(last([1, 2, 3]) === 2, "last [1, 2, 3] === 2 passed.");
});

QUnit.test("Rest function", function(assert) {
  assert.ok(rest([1, 2, 3]).join('') === [2, 3].join(''), "rest [1, 2, 3] === [2, 3] passed.");
  assert.notOk(rest([1, 2, 3]).join('') === [1, 2, 3].join(''), "rest [1, 2, 3] === [1, 2, 3] passed.");
});