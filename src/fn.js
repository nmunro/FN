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
   * expressions and runs a callback function if
   * any of the expressions are true.
   *
   * Example:
   * FN.any(() => {
   *   console.log("One of the expressions is true.");
   * }, 1 === 1, 5 === 5);
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}
   * @param {array} lst - The arguments to FN.any. FN.any takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   */
  "any": (cb, ...lst) => { 
    var result = false;

    lst.forEach((element) => { if(element) result = true; });

    return(cb !== undefined && result) ? cb() : undefined;
  },

  /**
   * FN.all is a function which evaluates a number of
   * expressions and runs a callback function if
   * all of the expressions are true.
   *
   * Example:
   * FN.all(() => {
   *   console.log("All of the expressions are true.");
   * }, 1 === 1, 5 === 5);
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}
   * @param {array} lst - The arguments to FN.all. FN.all takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   */
  "all": (cb, ...lst) => {
    var result = true;

    lst.forEach((element) => { if(!element) result = false; });

    return(cb !== undefined && result) ? cb() : undefined;
  },

  /**
   * FN.first runs a callback with the first element of
   * a list as its one and only parameter. The list
   * in question is just a set of values passed to first.
   *
   * Example:
   * FN.first((firstElement) => {
   *   console.log(firstElement);
   * }, 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (firstElement) =>  {...}
   * @param {array} lst - The arguments to FN.first. FN.first takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   */
  "first": (cb, ...lst) => {
    return(cb !== undefined && lst[0] !== undefined) ? cb(lst[0]) : undefined;
  },

  /**
   * FN.last is the inverse of FN.first and instead of
   * passing the first element of a list into a callback
   * passes the last element passed to FN.last.
   *
   * Example:
   * FN.last((lastElement) => {
   *   console.log(lastElement);
   * }, 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (lastElement) =>  {...}
   * @param {array} lst - The arguments to FN.last. FN.last takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   * @see FN.first
   */
  "last": (cb, ...lst) => {
    return(cb !== undefined && lst[0] !== undefined) ? cb(lst[lst.length-1]) :
      (lst[lst.length-1] !== undefined) ? lst[lst.length-1] : undefined;
  },

  /**
   * FN.nth complements FN.first and FN.last by providing
   * a means to grab an arbitrary element in a list by numeric
   * index. The callback is executed with the second argument to
   * FN.nth being the index and the rest of the arguments converted
   * to the list of items to grab the index of.
   *
   * Example:
   * FN.nth((nthElement) => {
   *   console.log(nthElement);
   * }, 2, 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (nthElement) =>  {...}
   * @param {number} n - The nth element in the list to try and get.
   * @param {array} lst - The arguments to FN.nth. FN.nth takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   * @see FN.first
   * @see FN.last
   */
  "nth": (cb, n, ...lst) => {
    return(cb !== undefined && lst[n] !== undefined) ? cb(n, lst[n]) : undefined;
  },

  /**
   * FN.rest complements FN.first by passing everything
   * execept the first element into a callback.
   *
   * Example:
   * FN.rest((remainingElements) => {
   *   remainingElements.forEach((element) => {
   *    console.log(element);
   *   });
   * }, 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (remainingElements) =>  {...}
   * @param {array} lst - The arguments to FN.rest. FN.rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   * @see FN.first
   */
  "rest": (cb, ...lst) => {
    return(cb !== undefined && lst !== undefined && lst.length > 1) ? cb(lst.slice(1)) : undefined;
  },

  /**
   * FN.take runs the supplied callback with a number and a
   * list of items. The supplied callback is executed with
   * an array containing the first n elements in the list of
   * items passed into FN.take.
   *
   * Example:
   * FN.take((elements) => {
   *   elements.forEach((element) => {
   *     console.log(element);
   *   });
   * }, 2, "Lions", "Tigers", "Bears");
   *
   * FN.take((elements) => {
   *  elements.forEach((element) => {
   *    console.log(element);
   *  });
   * }, 2, ["Lions", "Tigers", "Bears"]);
   *
   * @param {function} cb - The callback to execute in the form: (elements) =>  {...}
   * @param {number} n - The number of elements to take from the remaining arguments.
   * @param {array} lst - The arguments to FN.take. FN.take takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   */
  "take": (cb, n, ...lst) => {
    return(cb !== undefined && n !== undefined && lst.length > 1) ?
      cb(lst.slice(0, n)) :
        (cb !== undefined && n !== undefined && lst.length === 1) ?
          cb(lst[0].slice(0, n)):
          undefined;
  },

  /**
   * FN.if is a single branch function. It expects a
   * callback and any number of values. The values
   * are treated as if they were a list and the
   * callback is executed with no arguments.
   *
   * Example:
   * FN.if(() => {
   *   console.log("Is true");
   * }, 1 === 1, 2 === 2);
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}
   * @param {array} lst - The arguments to FN.if. FN.if takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   * @see FN.ifElse
   */
  "if": (cb, ...lst) => {
    return(cb !== undefined && lst !== undefined && lst.length > 0) ? fn.prototype.any(cb, lst) : undefined;
  },

  /**
   * FN.ifElse expands upon FN.if by permitting the user
   * to provide a second callback function to be executed
   * in the event that the if expression evaluates to false.
   *
   * NOTE: Multiple FNi.fElse can be nested inside of the callback functions.
   *
   * Example:
   * FN.ifElse(() => {
   *   console.log("Is true");
   * }, () => {
   *  console.log("Is false");
   * }, 1 === 1, 2 === 2);
   *
   * @param {function} cb1 - The callback to execute in the form: () =>  {...} if true.
   * @param {function} cb2 - The callback to execute in the form: () =>  {...} if false.
   * @param {array} lst - The arguments to FN.ifElse. FN.ifElse takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined.
   * @see FN.if
   */
  "ifElse": (cb1, cb2, ...lst) => {
    var result = true;

    lst.forEach((element) => { if(!element) result = false; });

    return(cb1 !== undefined && cb2 !== undefined && lst !== undefined && lst.length > 0 && result) ? cb1() : cb2();
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
  * @param {array} lst - The array of constraints that can be passed in.
  * @return {array} - The array built from lst.
  */
  "range": (...lst) => {
    var func;
    var start = (lst.length > 1) ? lst[0] : 0;
    const stop = (lst[1] !== undefined) ? lst[1] : lst[0];
    const step = (lst[2] !== undefined) ? lst[2] : 1;
    const arr = [];
    const f1 = (() => { update(() => { start += step; }); });
    const f2 = (() => { update(() => { start -= step; }); });
    const update = ((cb) => {
      arr.push(start);
      cb();
    });

    func = ((stop - start) >= 0) ?
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
  * @param {array} lst - An array of expression/function pairs to evaluate/run.
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
  * FN.alternate is a function for applying the callback for every N elemet in
  * an array.
  *
  * Example:
  * FN.alternate((elm) => { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);
  *
  * @param {function} cb - The function to apply to n elements of the array.
  * @param {array} arr - The array containing the elements to apply the function to.
  * @param {number} step - The interval of steps to apply a function to.
  * @return undefined.
  */
  "alternate": (cb, arr, step) => {
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
   * @param {number} {string} val - The sentinal condition.
   * @param {array} lst - The condition/function pairs to check against the sentinal
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
   * the sum of all arguments all arguments must be numbers, if not an error
   * will be thrown.
   * 
   * Example:
   * FN.sum(1, 2, 3, 4, 5);
   * 
   * @param {lst} - The list of numbers to sum.
   * @return The sum of the provided arguments.
   * @throws {InvalidArgumentsException} Arguments must be numbers.
   */
  "sum": (...lst) => {
    var valid = lst.every((elm) => { return(typeof elm === "number"); });
    
    if(valid) return lst.reduce((prev, curr) => { return prev + curr; });
    else throw "Invalid Arguments Exception";
  }
});

const FN = fn();
