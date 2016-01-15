QUnit.test("Any function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.any(() => {
    assert.ok(true, "Result true if all the rest params evaluate to true.");
    done1();
  }, true, true);

  FN.any(() => {
    assert.ok(true, "Result true if only one of the rest params evaluates to true.");
    done2();
  }, true, false);

  FN.any(() => {
    var done3 = assert.async();
    assert.notOk(false, "This test shouldn't run, if you see this something has gone wrong.");
    done3();
  }, false, false);
});

QUnit.test("All function", (assert) => {
  var done1 = assert.async();

  FN.all(() => {
    assert.ok(true, "Result true if all rest params evaluate to true.");
    done1();
  }, true, true);

  FN.all(() => {
    var done2 = assert.async();
    assert.notOk(false, "Result false if even one of the rest params evaluate to false, if working this test shouldn't be executed.");
    done2();
  }, true, false);

  FN.all(() => {
    var done3 = assert.async();
    assert.notOk(false, "This test shouldn't run, if you see this something has gone wrong.");
    done3();
  }, false, false);
});

QUnit.test("First function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.first((element) => {
    assert.ok(element === 1, "First element in the list [1, 2, 3, 4, 5] is 1.");
    done1();
  }, 1, 2, 3, 4, 5);

  FN.first((element) => {
    assert.notOk(element === 2, "First element in the list [1, 2, 3, 4, 5] is NOT 2.");
    done2();
  }, 1, 2, 3, 4, 5);
});

QUnit.test("Nth function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.nth((n, element) => {
    assert.ok(element === 3, "The nth element '" + n + "' is '3' in the list [1, 2, 3, 4, 5].")
    done1();
  }, 2, 1, 2, 3, 4, 5);

  FN.nth((n, element) => {
    assert.notOk(element === 0, "The nth element '" + n + "' is not '0' in the list [1, 2, 3, 4, 5].")
    done2();
  }, 2, 1, 2, 3, 4, 5);
});

QUnit.test("Last function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.last((element) => {
    assert.ok(element === 5, "Last element in the list [1, 2, 3, 4, 5] is 5.");
    done1();
  }, 1, 2, 3, 4, 5);

  FN.last((element) => {
    assert.notOk(element === 0, "Last element in the list [1, 2, 3, 4, 5] is not 0.");
    done2();
  }, 1, 2, 3, 4, 5);
});

QUnit.test("Rest function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.rest((rest) => {
    assert.ok(rest.toString() === [2, 3, 4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is equal to [2, 3, 4, 5].");
    done1();
  }, 1, 2, 3, 4, 5);

  FN.rest((rest) => {
    assert.notOk(rest.toString() === [4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is not equal to [4, 5].");
    done2();
  }, 1, 2, 3, 4, 5);
});

QUnit.test("Take function", (assert) => {
  var done1 = assert.async();

  FN.take((lst) => {
    assert.ok(lst.toString() === ["Lions", "Tigers"].toString(), "Take got the first two elements of the list.");
    done1();
  }, 2, "Lions", "Tigers", "Bears");
});

QUnit.test("If function", (assert) => {
  var done1 = assert.async();

  FN.if(() => {
    assert.ok(1 === 1, "FN.if callback function has executed correctly.");
    done1();
  }, 1 === 1, 2 === 2);
});

QUnit.test("If-else function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.ifElse(() => {
    assert.ok(1 === 1, "FN.ifElse callback function has executed correctly for true.");
    done1();
  }, () => {
    return false;
  }, 1 === 1, 2 === 2);

  FN.ifElse(() => {
    return false;
  }, () => {
    assert.ok(1 === 1, "FN.ifElse callback function has executed correctly for false.");
    done2();
  }, 1 === 1, 2 === 3);
});

QUnit.test("Let function", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.let(function() {
    assert.ok(this.age === 29, "FN.let callback function detects the correct age value");
    done1();
    assert.notOk(this.name === "John Smith", "FN.let callback function detects name is NOT 'John Smith'.");
    done2();
  }, { "age": 29, "name": "Neil Munro" });
});
