/**
 * FN is a functional library for LISP like operations.
 * This is designed to be used from within ES6.
 * Other older versions of ES may not work properly.
 *
 * This is kinda just research, experimenting with
 * functional programming in JS. If you however
 * find this library useful let me know and I'll
 * keep working on it.
 *
 * Copyright (c) Neil Munro 2015-2016.
 * @author Neil Munro <neilmunro@gmail.com>
 */

"use strict";

// Throw FN into it's own frozen constant variable.
const FN = Object.freeze(Object.create({
  /**
   * FN.any is a function which evaluates a number of
   * expressions and runs a callback function if
   * any of the expressions are true.
   *
   * Example:
   * FN.any(() => {
   *  // Do something important.
   * }, 1 === 1, 5 === 5);
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}
   * @param {array} lst - The arguments to any. Any takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if no expressions
   * evaluated to true or the users didn't pass in a callback.
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
   *  // Do something important.
   * }, 1 === 1, 5 === 5);
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}
   * @param {array} lst - The arguments to all. All takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if even one
   * expression evaluated to false or the user didn't pass in a callback.
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
   * FN.first((firstElement) => console.log(firstElement), 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (firstElement) =>  {...}
   * @param {array} lst - The arguments to first. First takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback or at least one element passed into first.
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
   * FN.last((lastElement) => console.log(lastElement), 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (lastElement) =>  {...}
   * @param {array} lst - The arguments to last. Last takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback or at least one element passed into last.
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
   * FN.nth((nthElement) => console.log(nthElement), 2, 1, 2, 3, 4, 5);
   *
   * @param {function} cb - The callback to execute in the form: (nthElement) =>  {...}
   * @param {number} n - The nth element in the list to try and get.
   * @param {array} lst - The arguments to nth. Nth takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback or the nth element does not exist.
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
   * @param {array} lst - The arguments to rest. Rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback, a list or the argument list is smaller than one.
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
   * @param {function} cb - The callback to execute in the form: (elements) =>  {...}
   * @param {number} n - The number of elements to take from the remaining arguments.
   * @param {array} lst - The arguments to rest. Rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback.
   */
  "take": (cb, n, ...lst) => {
    return(cb !== undefined && n !== undefined) ? cb(lst.slice(0, n)) : undefined;
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
   * @param {array} lst - The arguments to rest. Rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback.
   * @see FN.ifElse
   */
  "if": (cb, ...lst) => {
    var result = true;

    lst.forEach((element) => { if(!element) result = false});

    return(cb !== undefined && lst !== undefined && lst.length > 0 && result) ? cb() : undefined;
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
   * },
   * () => {
   *  console.log("Is false");
   * },
   * 1 === 1, 2 === 2);
   *
   * @param {function} cb1 - The callback to execute in the form: () =>  {...} if true.
   * @param {function} cb2 - The callback to execute in the form: () =>  {...} if false.
   * @param {array} lst - The arguments to rest. Rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback.
   * @see FN.if
   */
  "ifElse": (cb1, cb2, ...lst) => {
    var result = true;

    lst.forEach((element) => { if(!element) result = false});

    return(cb1 !== undefined && cb2 !== undefined && lst !== undefined && lst.length > 0 && result) ? cb1() : cb2();
  },

  /**
   * FN.let created a new isolated execution context with a set of values
	 initilised within the context and visible only for the duration of the
	 callback function.
   *
   * Example:
   * FN.let(() => {
	 *   console.log(`Hi my name is ${name} and I am ${age} years old.`);
	 * },{"age": 29, "name": "Neil Munro"});
   *
   * @param {function} cb - The callback to execute in the form: () =>  {...}.
   * @param {object} objectContext - An object containing the key/value pairs
	 * that are to be created inside the execution context.
	 * @return The return value of the callback function.
   * @see FN.if
   */
	"let": (cb, objectContext) => {
		var tmp;
		(() => {
			Object.keys(objectContext).forEach((key) => {
				this[key] = objectContext[key];
			});
			tmp = cb.call(this);
		})();
		return tmp;
	}
}));
