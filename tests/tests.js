QUnit.test("FN presence", function(assert) {
  assert.ok(FN !== undefined, "FN present!");
});

QUnit.test("Any function", function(assert) {
  assert.ok(FN.any([true, true]) === true, "Result true if all the rest params evaluate to true.");
  assert.ok(FN.any([true, false]) === true, "Result true if all the rest params evaluate to true.");
  assert.ok(FN.any([false, false]) === false, "Result true if only one of the rest params evaluates to true.");
});

QUnit.test("All function", function(assert) {
  assert.ok(FN.all([true, true]) === true, "Result true if all the rest params evaluate to true.");
  assert.ok(FN.all([true, false]) === false, "Result true if all the rest params evaluate to true.");
  assert.ok(FN.all([false, false]) === false, "Result true if only one of the rest params evaluates to true.");
});

QUnit.test("First function", function(assert) {
  assert.ok(FN.first([1, 2, 3, 4, 5]) === 1, "Checking for 1 being the first element.");
  assert.notOk(FN.first([1, 2, 3, 4, 5]) === 2, "Checking for something other than the first element.");
});

QUnit.test("Nth function", function(assert) {
  assert.ok(FN.nth([1, 2, 3, 4, 5], 2) === 3, "The nth element in position 2 is '3' in the list [1, 2, 3, 4, 5].");
  assert.notOk(FN.nth([1, 2, 3, 4, 5], 2) === 0, "The nth element in position 2 is not '0' in the list [1, 2, 3, 4, 5].");
});

QUnit.test("Last function", function(assert) {
  assert.ok(FN.last([1, 2, 3, 4, 5]) === 5, "Last element in the list [1, 2, 3, 4, 5] is 5.");
  assert.notOk(FN.last([1, 2, 3, 4, 5]) === 2, "Last element in the list [1, 2, 3, 4, 5] is not 2.");
});

QUnit.test("Rest function", function(assert) {
  assert.ok(FN.rest([1, 2, 3, 4, 5]).toString() === [2, 3, 4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is equal to [2, 3, 4, 5].");
  assert.notOk(FN.rest([1, 2, 3, 4, 5]).toString() === [4, 5].toString(), "Remainder of the array [1, 2, 3, 4, 5] is not equal to [4, 5].");
});

QUnit.test("Take function", function(assert) {
  assert.ok(FN.take(["Lions", "Tigers", "Bears"], 2).toString() === ["Lions", "Tigers"].toString(), "Take got the first two elements of the list.");
  assert.notOk(FN.take(["Lions", "Tigers", "Bears"], 2).toString() === ["Lions", "Tigers", "Bears"].toString(), "Take got the first two elements of the list.");
  assert.ok(FN.take(FN.range(10, 0, 2), 2).toString() === [10, 8].toString(), "Take works with range, cool!");
  assert.notOk(FN.take(FN.range(10, 0, 2), 2).toString() === [10].toString(), "Take works with range, cool!");
});

QUnit.test("If function", function(assert) {
  var done1 = assert.async();

  FN.if([1 === 1, 2 === 2], function() {
    assert.ok(1 === 1, "FN.if callback function has executed correctly.");
    done1();
  });
});

QUnit.test("If-else function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.ifElse(FN.any([1 === 1, 2 === 3]), function() {
    assert.ok(1 === 1, "FN.ifElse callback function has executed correctly for true.");
    done1();
  }, function() {
    return false;
  });

  FN.ifElse(FN.all([1 === 1, 2 === 3]), function() {
    return false;
  }, function() {
    assert.ok(1 === 1, "FN.ifElse callback function has executed correctly for false.");
    done2();
  });
});

QUnit.test("Let function", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();

  FN.let({"age": 29, "name": "Neil Munro"}, function() {
    assert.ok(this.age === 29, "FN.let callback function detects the correct age value");
    done1();
    assert.notOk(this.name === "John Smith", "FN.let callback function detects name is NOT 'John Smith'.");
    done2();
  });
});

// Range isn't an asyncronous function, testing is easy.
QUnit.test("Range tests", function(assert) {
  assert.ok(FN.range(0, 5).toString() === [0, 1, 2, 3, 4, 5].toString(), "Forward matches reference array.");
  assert.ok(FN.range(5, 0).toString() === [5, 4, 3, 2, 1, 0].toString(), "Backwards matches reference array.");
  assert.ok(FN.range(6, 0, 2).toString() === [6, 4, 2, 0].toString(), "Backwards match with step of two matches reference array.");
  assert.notOk(FN.range(6, 0, 3).toString() === [6, 4, 2, 0].toString(), "Does not match the reference array.");
});

QUnit.test("Cond tests", function(assert) {
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();

  FN.cond(
    1 === 2, function() {
      assert.ok(false, "The first callback was incorrectly executed.");
      done1();
    },
    2 === 3, function() {
      assert.ok(false, "The second callback was incorrectly executed.");
      done1();
    },
    "tmp" === "tmp", function() {
      assert.ok(true, "The third callback was correctly executed.");
      done1();
    }
  );

  FN.cond(
    1 === 2, function() {
      assert.ok(false, "The first callback was incorrectly executed.");
      done2();
    },
    2 === 2, function() {
      assert.ok(true, "The second callback was correctly executed.");
      done2();
    },
    "tmp" === "tmp", function() {
      assert.ok(false, "The third callback was incorrectly executed.");
      done2();
    }
  );

  FN.cond(
    1 === 1, function() {
      assert.ok(true, "The first callback was correctly executed.");
      done3();
    },
    2 === 2, function() {
      assert.ok(false, "The second callback was incorrectly executed.");
      done3();
    },
    "tmp" === "tmp2", function() {
      assert.ok(false, "The third callback was incorrectly executed.");
      done3();
    }
  );
});

QUnit.test("everyOther tests", function(assert) {
	FN.everyOther([1, 2, 3, 4, 5, 6], 2, function(element) {
		assert.ok(element === 2 || element === 4 || element === 6, "Element is one of the expected numbers.");
	});
});

QUnit.test("Case tests", function(assert) {
  assert.ok(FN.case(1,
		1, function() { return 1*2; },
		2, function() { return 2*2; },
		3, function() { return 3*2; },
		FN.default, function() { return 19; }
	) === 2, "First case occured.");

  assert.ok(FN.case(2,
		1, function() { return 1*2; },
		2, function() { return 2*2; },
		3, function() { return 3*2; },
		FN.default, function() { return 19; }
	) === 4, "Second case occured.");

  assert.ok(FN.case(3,
		1, function() { return 1*2; },
		2, function() { return 2*2; },
		3, function() { return 3*2; },
		FN.default, function() { return 19; }
	) === 6, "Third case occured.");

  assert.ok(FN.case(9,
		1, function() { return 1*2; },
		2, function() { return 2*2; },
		3, function() { return 3*2; },
		FN.default, function() { return "Other"; }
	) === "Other", "Default case occured.");
});

QUnit.test("Sum tests", function(assert) {
  assert.ok(FN.sum([1, 2, 3, 4, 5]) === 15, "Sum of [1, 2, 3, 4, 5] is 15.");
  assert.notOk(FN.sum([1, 2, 3, 4, 5]) === 16, "Sum of [1, 2, 3, 4, 5] is not 16.");
  assert.ok(FN.sum(["a", 1, 2, 3, 4, 5]) === undefined, "Sum of ['a', 1, 2, 3, 4, 5] is undefined.");
});

QUnit.test("Or function", function(assert) {
  assert.ok(FN.or(31, false, 32) === 31, "Got first truthy value: 31.");
  assert.ok(FN.or(false, 31) === 31, "Got first truthy value: 31.");
  assert.ok(FN.or(false, "a") === "a", "Got first truthy value: 'a'.");
	assert.ok(FN.or(false, false, false) === false, "Got final value: false.");
	assert.ok(FN.or(false, true, false) === true, "Got first truthy value: true.");
});
