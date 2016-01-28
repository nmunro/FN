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
  assert.ok(FN.first([1, 2, 3, 4, 5]) === 1, "Checking for 1 being the first element.");
  assert.notOk(FN.first([1, 2, 3, 4, 5]) === 2, "Checking for something other than the first element.");
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
  var done2 = assert.async();

  FN.take((lst) => {
    assert.ok(lst.toString() === ["Lions", "Tigers"].toString(), "Take got the first two elements of the list.");
    done1();
  }, 2, "Lions", "Tigers", "Bears");

  FN.take((lst) => {
    assert.ok(lst.toString() === [10, 8].toString(), "Take works with range, cool!");
    done2();
  }, 2, FN.range(10, 0, 2));
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

// Range isn't an asyncronous function, testing is easy.
QUnit.test("Range tests", (assert) => {
  assert.ok(FN.range(0, 5).toString() === [0, 1, 2, 3, 4, 5].toString(), "Forward matches reference array.");
  assert.ok(FN.range(5, 0).toString() === [5, 4, 3, 2, 1, 0].toString(), "Backwards matches reference array.");
  assert.ok(FN.range(6, 0, 2).toString() === [6, 4, 2, 0].toString(), "Backwards match with step of two matches reference array.");
  assert.notOk(FN.range(6, 0, 3).toString() === [6, 4, 2, 0].toString(), "Does not match the reference array.");
});

QUnit.test("Cond tests", (assert) => {
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();

  FN.cond(
    1 === 2, () => {
      assert.ok(false, "The first callback was incorrectly executed.");
      done1();
    },
    2 === 3, () => {
      assert.ok(false, "The second callback was incorrectly executed.");
      done1();
    },
    "tmp" === "tmp", () => {
      assert.ok(true, "The third callback was correctly executed.");
      done1();
    }
  );

  FN.cond(
    1 === 2, () => {
      assert.ok(false, "The first callback was incorrectly executed.");
      done2();
    },
    2 === 2, () => {
      assert.ok(true, "The second callback was correctly executed.");
      done2();
    },
    "tmp" === "tmp", () => {
      assert.ok(false, "The third callback was incorrectly executed.");
      done2();
    }
  );

  FN.cond(
    1 === 1, () => {
      assert.ok(true, "The first callback was correctly executed.");
      done3();
    },
    2 === 2, () => {
      assert.ok(false, "The second callback was incorrectly executed.");
      done3();
    },
    "tmp" === "tmp2", () => {
      assert.ok(false, "The third callback was incorrectly executed.");
      done3();
    }
  );
});

QUnit.test("Alternate tests", (assert) => {
	FN.alternate((element) => {
		assert.ok(element === 2 || element === 4 || element === 6, "Element is one of the expected numbers.");
	}, [1, 2, 3, 4, 5, 6], 2);
});

QUnit.test("Case tests", (assert) => {
  assert.ok(FN.case(1,
		1, () => 1*2,
		2, () => 2*2,
		3, () => 3*2,
		FN.default, () => 19
	) === 2, "First case occured.");

  assert.ok(FN.case(2,
		1, () => 1*2,
		2, () => 2*2,
		3, () => 3*2,
		FN.default, () => 19
	) === 4, "Second case occured.");

  assert.ok(FN.case(3,
		1, () => 1*2,
		2, () => 2*2,
		3, () => 3*2,
		FN.default, () => 19
	) === 6, "Third case occured.");

  assert.ok(FN.case(9,
		1, () => 1*2,
		2, () => 2*2,
		3, () => 3*2,
		FN.default, () => "Other"
	) === "Other", "Default case occured.");
});

QUnit.test("Sum tests", (assert) => {
  assert.ok(FN.sum(1, 2, 3, 4, 5) === 15, "Sum of 1, 2, 3, 4 and 5 is 15.");
  assert.notOk(FN.sum(1, 2, 3, 4, 5) === 16, "Sum of 1, 2, 3, 4 and 5 is only 15.");
});
