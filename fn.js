/**
 * FN is a functional library for LISP like operations.
 * This is designed to be used from within ES6.
 * Other older versions of ES may not work properly.
 * Copyright (c) Neil Munro 2015
 */

var FN = Object.create({
  "any": function(cb, ...lst) {
    var result = false;

    lst.forEach(function(element) {
      if(element) result = true;
    });

    return(cb !== undefined) ? cb(result) : result;
  },

  "all": function(cb, ...lst) {
    var result = true;

    lst.forEach(function(element) {
      if(!element) result = false;
    });

    return(cb !== undefined) ? cb(result) : result;
  },

  "first": function(cb, ...lst) {
    if(cb !== undefined && lst[0] !== undefined) return cb(lst[0]);
    else return(lst[0] !== undefined) ? lst[0] : undefined;
  },

  "last": function(cb, ...lst) {
    if(cb !== undefined && lst[0] !== undefined) cb(lst[lst.length-1]);
    else return(lst[lst.length-1] !== undefined) ? lst[lst.length-1] : undefined;
  },

  "nth": function(cb, n, ...lst) {
    return (cb !== undefined) ? cb(nth, lst[n]) : lst[n];
  },

  "rest": function(cb, ...lst) {
    return(cb !== undefined) ? cb(lst.slice(1)) : lst.slice(1);
  }
});
