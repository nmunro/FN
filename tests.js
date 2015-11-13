QUnit.test("Any function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();
  
  FN.any(function(result) {
    assert.ok(result, "Result true if all the rest params evaluate to true.");
    done1();
  }, true, true);

  FN.any(function(result) {
    assert.ok(result, "Result true if only one of the rest params evaluates to true.");
    done2();
  }, true, false);

  FN.any(function(result) {
    assert.notOk(result, "Result false when all rest params evaluate to false.");
    done3();
  }, false, false);
});

QUnit.test("All function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();

  FN.all(function(result) {
    assert.ok(result, "Result true if all rest params evaluate to true.");
    done1();
  }, true, true);

  FN.all(function(result) {
    assert.notOk(result, "Result false if even one of the rest params evaluate to false.");
    done2();
  }, true, false);

  FN.all(function(result) {
    assert.notOk(result, "Result false if all of the rest params evaluate to false.");
    done3();
  }, false, false);
});

QUnit.test("First function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();
  
  FN.first(function(element) {
    assert.ok(element === 1, "First element in the list [1, 2, 3, 4, 5] is 1.");
    done1();
  }, 1, 2, 3, 4, 5);

  FN.first(function(element) {
    assert.notOk(element === 2, "First element in the list [1, 2, 3, 4, 5] is NOT 2.");
    done2();
  }, 1, 2, 3, 4, 5);
});

QUnit.test("Nth function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.nth(function(element) {
    assert.ok(element === 3, "The nth element '2' is '3' in the list [1, 2, 3, 4, 5].")
    done1(); 
  }, 2, 1, 2, 3, 4, 5);

  FN.nth(function(element) {
    assert.notOk(element === 0, "The nth element '2' is not '0' in the list [1, 2, 3, 4, 5].")
    done2(); 
  }, 2, 1, 2, 3, 4, 5);
});

QUnit.test("Last function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.last(function(element) {
    assert.ok(element === 5, "Last element in the list [1, 2, 3, 4, 5] is 5.");
    done1();
  }, 1, 2, 3, 4, 5);

  FN.last(function(element) {
    assert.notOk(element === 0, "Last element in the list [1, 2, 3, 4, 5] is not 0.");
    done2();
  }, 1, 2, 3, 4, 5);
});

QUnit.test("Rest function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.rest(function(rest) {
    assert.ok(rest.toString() === [2, 3, 4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is equal to [2, 3, 4, 5].");
    done1();  
  }, 1, 2, 3, 4, 5);

  FN.rest(function(rest) {
    assert.notOk(rest.toString() === [4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is not equal to [4, 5].");
    done2();  
  }, 1, 2, 3, 4, 5);
});
