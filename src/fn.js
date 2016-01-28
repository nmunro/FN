/**
 * FN is a functional library providing functions
 * inspired (ripped off) by LISP/Clojure.
 *
 * No, I have no shame.
 *
 * This is kinda just research, experimenting with
 * functional programming in JS. If you however
 * find this library useful let me know and I'll
 * keep working on it, if you have suggestions, I
 * might even incorporate your ideas.
 *
 * This is designed to be used from within ES6.
 * Other older versions of ES may not work properly.
 *
 * Copyright (c) Neil Munro 2015-2016.
 * @constructor
 * @author Neil Munro <neilmunro@gmail.com>
 */

const fn = function() { return(this === window) ? new fn() : this; };

fn.prototype = Object.freeze({
  "name": "FN",
  "version": "0.0.1",
  "default": Symbol(":default"),

  /**
   * FN.any is a function which evaluates a number of
   * expressions and returns true if ANY of the expressions
   * themselves are true.
   *
   * Example:
   * FN.any([1 === 1, 5 === 5]);
   *
   * @param {array} lst - The list of boolean expressions to FN.any.
   * @return {boolean} The result of any of the expressions being true.
   */
  "any": (lst) => {
    return lst.some((elm) => { return elm; });
  },

  /**
   * FN.all is a function which evaluates a number of
   * expressions and returns true only if ALL of the
   * expressions are themselves true.
   *
   * Example:
   * FN.all([1 === 1, 5 === 5]);
   *
   * @param {array} lst - The list of boolean expressions to FN.all. 
   * @return {boolean} The result of all of the expressions being true.
   */
  "all": (lst) => {
    return lst.every((elm) => { return elm; });
  },

  /**
   * FN.first returns the first element of a list.
   *
   * Example:
   * FN.first([1, 2, 3, 4, 5]);
   *
   * @param {array} lst - The list to get the first element of. 
   * @return The first element of the list or undefined.
   */
  "first": (lst) => {
    return (lst[0] !== undefined) ? lst[0] : undefined;
  },

  /**
   * FN.last is the inverse of FN.first and returns the final element in a list.
   *
   * Example:
   * FN.last([1, 2, 3, 4, 5]);
   *
   * @param {array} lst - The arguments to FN.last. 
   * @return The last element of the list or undefined.
   * @see FN.first
   */
  "last": (lst) => {
    return (lst[lst.length-1] !== undefined) ? lst[lst.length-1] : undefined;
  },

  /**
   * FN.nth complements FN.first and FN.last by providing
   * a means to grab an arbitrary element in a list by numeric
   * index. 
   *
   * Example:
   * FN.nth([1, 2, 3, 4, 5], 2);
   *
   * @param {array} lst - The list to get the nth element of.
   * @param {number} n - The nth element in the list to try and get.
   * @return The nth element of the list or undefined.
   * @see FN.first
   * @see FN.last
   */
  "nth": (lst, n) => {
    return(lst[n] !== undefined) ? lst[n] : undefined;
  },

  /**
   * FN.rest complements FN.first by passing everything
   * execept the first element into a callback.
   *
   * Example:
   * FN.rest([1, 2, 3, 4, 5]);
   *
   * @param {array} lst - The arguments to FN.rest.
   * @return {array} The rest of the list or undefined.
   * @see FN.first
   */
  "rest": (lst) => {
    return(lst !== undefined && lst.length > 1) ? lst.slice(1) : undefined;
  },

  /**
   * FN.take returns a new list from the n number of elements from the
   * list passed into it.
   * 
   * Example:
   * FN.take(["Lions", "Tigers", "Bears"], 2);
   * FN.take(FN.range(10, 0, 2), 2);
   *
   * @param {array} lst - The arguments to FN.take. 
   * @param {number} n - The number of elements to take from the array lst.
   * @return {array} A new list made up of the n number of elements, if n is bigger than the list the whole list is returned.
   */
  "take": (lst, n) => {
    return lst.filter((element, index) => { return(n >= index+1); });
  },

  /**
   * FN.if is a single branch function. It expects a
   * callback and a single boolean expression.
   *
   * NOTE: FN.any and FN.all can be used here.
   *
   * Example:
   * FN.if(() => {
   *   console.log("Is true");
   * }, true);
   *
   * FN.if(() => {
   *   console.log("Is true");
   * }, FN.any([1 === 1, 2 === 2]));
   *
   * @param {function} cb - The callback to execute if true.
   * @param {boolean} cond - The single boolean expression to FN.if.
   * @return The result of the callback or undefined.
   * @see FN.ifElse
   */
  "if": (cb, cond) => {
    return(cb !== undefined && cond) ? cb() : undefined;
  },

  /**
   * FN.ifElse expands upon FN.if by permitting the user
   * to provide a second callback function to be executed
   * in the event that the if expression evaluates to false.
   *
   * NOTE: Multiple FN.fElse can be nested inside of the callback functions.
   *
   * Example:
   * FN.ifElse(() => {
   *   console.log("Is true");
   * }, () => {
   *  console.log("Is false");
   * }, true);
   *
   * FN.ifElse(() => {
   *   console.log("Is true");
   * }, () => {
   *  console.log("Is false");
   * }, FN.all([1 === 1, 2 === 2]));
   *
   * @param {function} cb1 - The callback to execute in the form: () =>  {...} if true.
   * @param {function} cb2 - The callback to execute in the form: () =>  {...} if false.
   * @param {boolean} cond - The boolean expression to FN.ifElse.
   * @return The result of the callback or undefined.
   * @see FN.if
   */
  "ifElse": (cb1, cb2, cond) => {
    return(cb1 !== undefined && cb2 !== undefined) ? 
      (cond) ?
        cb1() :
        cb2() :
      undefined;
  },

  /**
  * FN.let creates a new isolated execution context with a set of values initilised
  * within the context and visible only for the duration of the callback function.
  * Note that it acts as a closure and does have access to outer variables.
  *
  * Example:
  * FN.let(function() {
  *   console.log("Hi my name is " + this.name + " and I am " + this.age + " years old.");
  * }, {"age": 29, "name": "Neil Munro"});
  *
  * @param {function} cb - The callback to execute in the form: function() {...}.
  * You MUST use the original function() {} form as these bind a 'this' value to
  * the scope that FN.let provides.
  * @param {object} objectContext - An object containing the key/value pairs
  * that are to be created inside the execution context.
  * @return The return value of the callback function.
  * @see FN.if
  */
  "let": (cb, objectContext) => {
    (() => {
      var tmp = {};
      Object.keys(objectContext).forEach((key) => tmp[key] = objectContext[key]);
      return cb.bind(tmp)();
    })();
  },

  /**
  * FN.range generates and array of numeric values based on criteria that
  * the programmer enters.
  *
  * Example:
  * FN.range(0, 10, 1);
  *
  * @param {number=} start - The number to start from.
  * @param {number} stop - The number to go to.
  * @param {number=} step - The number of steps/intervals.
  * @return {array} The array built from lst.
  */
  "range": (...lst) => {
    var start = (lst.length > 1) ? lst[0] : 0;

    const arr = [];
    const step = (lst[2] !== undefined) ? lst[2] : 1;
    const stop = (lst[1] !== undefined) ? lst[1] : lst[0];
    const f1 = (() => { update(() => { start += step; }); });
    const f2 = (() => { update(() => { start -= step; }); });
    const update = ((cb) => {
      arr.push(start);
      cb();
    });

    const func = ((stop - start) >= 0) ?
      (() => { while(start <= stop) f1(); }) :
      (() => { while(start >= stop) f2(); });
    func();

    return arr;
  },

  /**
  * FN.cond is analogous to a switch statement. It evaluates each expression
  * in turn until it first the first one that evaluates to true and runs its
  * acompanying function.
  *
  * Example:
  * FN.cond(
  *   1 === 2, () => { console.log("first");  },
  *   2 === 3, () => { console.log("second");  },
  *   "tmp" === "tmp", () => { console.log("third");  }
  * );
  *
  * @param {...(boolean|function)} lst - An array of expression/function pairs to evaluate/run.
  * @return The result of the executed function or undefined.
  */
  "cond": (...lst) => {
    var func = ((lst.length % 2) === 0) ? (() => {
      var tmp;
      lst.forEach((element, index) => {
        // Expression is true, store the next argument (a function) for later use.
        if(((index % 2) === 0) && tmp === undefined && element) tmp = index+1;
      });
      return (lst[tmp] !== undefined) ? lst[tmp]() : undefined;
    }) : undefined;
    return(func !== undefined) ? func() : undefined;
  },

  /**
  * FN.everyOther is a function for applying the callback for every N elemet in
  * an array.
  *
  * Example:
  * FN.everyOther((elm) => { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);
  *
  * @param {function} cb - The function to apply to n elements of the array.
  * @param {array} arr - The array containing the elements to apply the function to.
  * @param {number} step - The interval of steps to apply a function to.
  * @return undefined.
  */
  "everyOther": (cb, arr, step) => {
    arr.forEach((element, index) => {
      if((index % step) === 0) cb(element);
    });
  },

  /**
   * FN.case is a function that evaluates a set of conditions against a sentinal
   * condition, the acompanying function is ran. A default condition can be passed
   * and a final callback passed for the default condition.
   *
   * Example:
   * FN.case(9, 1, () => 1*2, 2, () => 2*2, 3, () => 3*2, FN.default, () => 19);
   *
   * @param {(number|string)} val - The sentinal condition.
   * @param {...(number|string|boolean|function)} lst - The condition/function pairs to check against the sentinal
   * and execute, if true.
   * @return The result of the executed function or undefined.
   */
  "case": (val, ...lst) => {
    var func = ((lst.length % 2) === 0) ? (() => {
      var found;
      var defaultCase;
      lst.forEach((element, index) => {
        if(((index % 2) === 0) && found === undefined && element === val) found = index+1;
        else if(element === fn.prototype.default) defaultCase = lst[index+1];
      });

      return(lst[found] !== undefined) ?
        lst[found]() :
        (defaultCase !== undefined) ?
          defaultCase() :
          undefined;
    }) : undefined;
    return(func !== undefined) ? func() : undefined;
  },

  /**
   * FN.sum is a function that takes a variable number of arguments and returns
   * the sum of all arguments all arguments must be numbers, if not undefined 
   * is returned.
   *
   * Example:
   * FN.sum([1, 2, 3, 4, 5]);
   *
   * @param {array} lst The list of numbers to sum.
   * @return {number|undefined} The sum of the provided arguments.
   */
  "sum": (lst) => {
    return(lst.every((elm) => { return(typeof elm === "number"); })) ?
      lst.reduce((prev, curr) => { return prev + curr; }) :
      undefined;
  }
});

const FN = fn();
