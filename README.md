# FN
A collection of useful kinda, sorta functional... Functions for JavaScript.
FN takes advantage of ES6 specific features and to be used with versions
before ES6 some sort of transpiler will be used.

## FN.any(function(result) { ... }, ...params);

### Description
any takes a callback which is passed the result of evaluating each of the rest parameters, result is true
if even only one of the rest parameters evaluates to true.

### Example 1
FN.any(function(result) {
  if(result) console.log("Was true!"); 
  else console.log("Was false!");
}, 1 === 1, 2 === 2);

## FN.all(function(result) { ... }, ...params);


### Description
all takes a callback which is passed the result of evaluating each of the rest paramters in turn,
if even one of the rest parameters evaluates to false result will be false.

### Example 1
FN.all(function(result) {
  if(result) console.log("Was true!"); 
  else console.log("Was false!");
}, 1 === 1, 2 === 2);

## FN.first(function(element) { ... }, ...params);

### Description
first is passed a callback and a list of parameters, the first of these parameters is passed into the callback.
first returns the RESULT of executing the callback, or if the callback argument was undefined the first element or undefined.

### Example 1
FN.first(function(element) {
  console.log("First element: " + element);
}, 1, 2);


## FN.nth(function(n, element) { ... }, n, ...params);

### Description
nth is passed a callback, an index and a list of parameters, the callback is passed the element found at index n.
nth returns the RESULT of executing the callback, or if the callback argument was undefined, the nth element, or undefined.

### Example 1
FN.nth(function(n, element) {
  console.log("Element " + n + " is " + element);
}, 0, 1, 2);

## FN.last(function(element) { ... }, ...params);

### Description
last is the logical opposite of first and behaves in the same way. The last element in the rest parameters is passed
to the callback.
last returns the RESULT of running the callback, or if the callback argument was undefined the last element or undefined.

### Example 1
FN.last(function(element) {
  console.log("Last element: " + element);
}, 1, 2);

## FN.rest(function(newList) { ... }, ...params);

### Description
rest is passed a callback and a list of parameters, a new list is passed to the callback, this new list is
a copy of the old list without the first element.
rest returns the RESULT of running the callback, or if the callback argument was undefined the new list, or undefined.

### Example 1
FN.rest(function(lst) {
  console.log("New list: " + lst.toString());  
}, 1, 2, 3, 4, 5);
