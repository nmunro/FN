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
   * Any expects a callback and any number of expressions.
   * The expressions are evaluated and if any one of them
   * are true then the callback is executed. 
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
   * All expects a callback and any number of expressions.
   * The expressions are evaluated and if all of them
   * are true then the callback is executed. 
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
   * First expects a callback and any number of values.
   * The values are treated as if they were a list and
   * the callback is executed with the first element
   * from this list as its only argument. 
   *
   * Example:
   * FN.first((firstElement) => console.log(firstElement));
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
   * Last expects a callback and any number of values.
   * The values are treated as if they were a list and
   * the callback is executed with the last element
   * from this list as its only argument. 
   *
   * Example:
   * FN.last((lastElement) => console.log(lastElement));
   *
   * @param {function} cb - The callback to execute in the form: (lastElement) =>  {...}
   * @param {array} lst - The arguments to last. Last takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback or at least one element passed into last.
   */
  "last": (cb, ...lst) => {
    return(cb !== undefined && lst[0] !== undefined) ? cb(lst[lst.length-1]) :
      (lst[lst.length-1] !== undefined) ? lst[lst.length-1] : undefined;
  },

  /**
   * Nth expects a callback and any number of values.
   * The values are treated as if they were a list and
   * the callback is executed with the nth element
   * from this list as its only argument. 
   *
   * Example:
   * FN.nth((nthElement) => console.log(nthElement));
   *
   * @param {function} cb - The callback to execute in the form: (nthElement) =>  {...}
   * @param {number} n - The nth element in the list to try and get.
   * @param {array} lst - The arguments to nth. Nth takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback or the nth element does not exist.
   */
  "nth": (cb, n, ...lst) => {
    return(cb !== undefined && lst[n] !== undefined) ? cb(n, lst[n]) : undefined;
  },

  /**
   * Rest expects a callback and any number of values.
   * The values are treated as if they were a list and
   * the callback is executed with the all but the first
   * element from this list passed in as an array as its
   * only argument. 
   *
   * Example:
   * FN.rest((remainingElements) => {
   *   remainingElements.forEach((element) => {
   *    console.log(element); 
   *   });
   * });
   *
   * @param {function} cb - The callback to execute in the form: (remainingElements) =>  {...}
   * @param {array} lst - The arguments to rest. Rest takes a variable number of
   * arguments and processes them all as if they were an array.
   * @return The result of the callback or undefined if there wasn't
   * a callback, a list or the argument list is smaller than one.
   */
  "rest": (cb, ...lst) => {
    return(cb !== undefined && lst !== undefined && lst.length > 1) ? cb(lst.slice(1)) : undefined;
  },

  /**
   * Take expects a callback, an index and any number of values.
   * The values are treated as if they were a list and
   * the callback is executed with as many elements as could be
   * take from the rest params up to the value of n.
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
  }
}));
