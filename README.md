# FN
A collection of useful kinda, sorta functional... Functions for JavaScript.

## any(arr, function() { ... });

any is a function which takes an array of statements and optional callback, each statement is evaluated and if
any of the statements are true the function returns true OR if passed a callback executes the callback.

## all(arr, function() { ... });

all is a function which takes an array of statements and an optional callback, each statement is evaluated and
only if ALL of the statements evaluate to true does the function return true, of if passed a callback executes the callback.

## first(arr, function(firstElement) { ... });

first is a function which takes an array and an optional callback, if the list has at least one element in it
then first will return the first element, or execute the callback with the first element as its parameter.
Otherwise undefined will be returned.

## nth(arr, n, function(nthElement) { ... });

nth is a function which takes an array and an optional callback, if the list is at least as long as the value
of n then n will return the nth element, or execute the callback with the nth element as its parameter.
Otherwise undefined will be returned. Please note nth is zero indexed, so if you want the third element, for
example, pass in 2 as the value to n.

## last(arr, function(lastElement) { ... });

last is a function which takes an array and an optional callback, if the list has at least one element in it
then first will return the last element, or execute the callback with the last element as its parameter.
Otherwise undefined will be returned.

## rest(arr, function(newList) { ... });

rest is a function which takes an array and an optional callback, if the list has at least two elements in it
then rest will remove the first element from the list and return the remaining elements as a new list. If a callback
was passed in then the callback will be executed with the new list as its parameter. Otherwise undefined will be returned.