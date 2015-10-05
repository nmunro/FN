function FN() { return this; }

FN.prototype.any = function(lst, cb) {
  var result = false;
  if(lst instanceof Array) {
    lst.forEach(function(element, index, array) {
      if(element) result = true;
    });
  }

  if(cb !== undefined && result) cb(true);
  else return result;
};

FN.prototype.all = function(lst, cb) {
  var result = true;
  if(lst instanceof Array && lst.length > 0) {
    lst.forEach(function(element, index, array) {
      if(!element) result = false;
    });

    if(cb !== undefined && result) cb(true);
    else return result;
  }
  else return false;
};

FN.prototype.first = function(lst, cb) {
  if(lst instanceof Array) {
    if(cb !== undefined && lst[0] !== undefined) cb(lst[0]);
    else return (lst instanceof Array) ? lst[0] : undefined;
  }
  return undefined;
};

FN.prototype.last = function(lst, cb) {
  if(lst instanceof Array && lst.length > 0) {
    if(cb !== undefined) cb(lst[lst.length-1]);
    else return lst[lst.length-1];
  }
  return undefined;
};

// Stick with zero indexing.
FN.prototype.nth = function(lst, nth, cb) {
  if(lst instanceof Array && nth <= lst.length) {
    if(cb !== undefined) cb(lst[nth]);
    else return lst[nth];
  }
  return undefined;
};

FN.prototype.rest = function(lst, cb) {
  if(lst instanceof Array && lst.length > 0) {
    if(cb !== undefined) cb(lst.slice(1));
    else return lst.slice(1);
  }
  return undefined;
};

var fn = new FN();
var all = fn.all;
var any = fn.any;
var first = fn.first;
var last = fn.last;
var nth = fn.nth;
var rest = fn.rest;
