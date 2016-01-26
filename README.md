## Classes

<dl>
<dt><a href="#fn">fn</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#any">any(cb, lst)</a> ⇒</dt>
<dd><p>FN.any is a function which evaluates a number of
expressions and runs a callback function if
any of the expressions are true.</p>
<p>Example:
FN.any(() =&gt; {
  console.log(&quot;One of the expressions is true.&quot;);
}, 1 === 1, 5 === 5);</p>
</dd>
<dt><a href="#all">all(cb, lst)</a> ⇒</dt>
<dd><p>FN.all is a function which evaluates a number of
expressions and runs a callback function if
all of the expressions are true.</p>
<p>Example:
FN.all(() =&gt; {
  console.log(&quot;All of the expressions are true.&quot;);
}, 1 === 1, 5 === 5);</p>
</dd>
<dt><a href="#first">first(cb, lst)</a> ⇒</dt>
<dd><p>FN.first runs a callback with the first element of
a list as its one and only parameter. The list
in question is just a set of values passed to first.</p>
<p>Example:
FN.first((firstElement) =&gt; {
  console.log(firstElement);
}, 1, 2, 3, 4, 5);</p>
</dd>
<dt><a href="#last">last(cb, lst)</a> ⇒</dt>
<dd><p>FN.last is the inverse of FN.first and instead of
passing the first element of a list into a callback
passes the last element passed to FN.last.</p>
<p>Example:
FN.last((lastElement) =&gt; {
  console.log(lastElement);
}, 1, 2, 3, 4, 5);</p>
</dd>
<dt><a href="#nth">nth(cb, n, lst)</a> ⇒</dt>
<dd><p>FN.nth complements FN.first and FN.last by providing
a means to grab an arbitrary element in a list by numeric
index. The callback is executed with the second argument to
FN.nth being the index and the rest of the arguments converted
to the list of items to grab the index of.</p>
<p>Example:
FN.nth((nthElement) =&gt; {
  console.log(nthElement);
}, 2, 1, 2, 3, 4, 5);</p>
</dd>
<dt><a href="#rest">rest(cb, lst)</a> ⇒</dt>
<dd><p>FN.rest complements FN.first by passing everything
execept the first element into a callback.</p>
<p>Example:
FN.rest((remainingElements) =&gt; {
  remainingElements.forEach((element) =&gt; {
   console.log(element);
  });
}, 1, 2, 3, 4, 5);</p>
</dd>
<dt><a href="#take">take(cb, n, lst)</a> ⇒</dt>
<dd><p>FN.take runs the supplied callback with a number and a
list of items. The supplied callback is executed with
an array containing the first n elements in the list of
items passed into FN.take.</p>
<p>Example:
FN.take((elements) =&gt; {
  elements.forEach((element) =&gt; {
    console.log(element);
  });
}, 2, &quot;Lions&quot;, &quot;Tigers&quot;, &quot;Bears&quot;);</p>
<p>FN.take((elements) =&gt; {
 elements.forEach((element) =&gt; {
   console.log(element);
 });
}, 2, [&quot;Lions&quot;, &quot;Tigers&quot;, &quot;Bears&quot;]);</p>
</dd>
<dt><a href="#if">if(cb, lst)</a> ⇒</dt>
<dd><p>FN.if is a single branch function. It expects a
callback and any number of values. The values
are treated as if they were a list and the
callback is executed with no arguments.</p>
<p>Example:
FN.if(() =&gt; {
  console.log(&quot;Is true&quot;);
}, 1 === 1, 2 === 2);</p>
</dd>
<dt><a href="#ifElse">ifElse(cb1, cb2, lst)</a> ⇒</dt>
<dd><p>FN.ifElse expands upon FN.if by permitting the user
to provide a second callback function to be executed
in the event that the if expression evaluates to false.</p>
<p>NOTE: Multiple FNi.fElse can be nested inside of the callback functions.</p>
<p>Example:
FN.ifElse(() =&gt; {
  console.log(&quot;Is true&quot;);
}, () =&gt; {
 console.log(&quot;Is false&quot;);
}, 1 === 1, 2 === 2);</p>
</dd>
<dt><a href="#let">let(cb, objectContext)</a> ⇒</dt>
<dd><p>FN.let creates a new isolated execution context with a set of values initilised
within the context and visible only for the duration of the callback function.
Note that it acts as a closure and does have access to outer variables.</p>
<p>Example:
FN.let(function() {
  console.log(&quot;Hi my name is &quot; + this.name + &quot; and I am &quot; + this.age + &quot; years old.&quot;);
}, {&quot;age&quot;: 29, &quot;name&quot;: &quot;Neil Munro&quot;});</p>
</dd>
<dt><a href="#range">range(lst)</a> ⇒ <code>array</code></dt>
<dd><p>FN.range generates and array of numeric values based on criteria that
the programmer enters.</p>
<p>Example:
FN.range(0, 10, 1);</p>
</dd>
<dt><a href="#cond">cond(lst)</a> ⇒</dt>
<dd><p>FN.cond is analogous to a switch statement. It evaluates each expression
in turn until it first the first one that evaluates to true and runs its 
acompanying function.</p>
<p>Example:
FN.cond(
  1 === 2, () =&gt; { console.log(&quot;first&quot;);  },
  2 === 3, () =&gt; { console.log(&quot;second&quot;);  },
  &quot;tmp&quot; === &quot;tmp&quot;, () =&gt; { console.log(&quot;third&quot;);  }
);</p>
</dd>
<dt><a href="#alternate">alternate(cb, arr, step)</a> ⇒</dt>
<dd><p>FN.alternate is a function for applying the callback for every N elemet in
an array.</p>
<p>Example:
FN.alternate((elm) =&gt; { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);</p>
</dd>
<dt><a href="#case">case(val, lst)</a> ⇒</dt>
<dd><p>FN.case is a function that evaluates a set of conditions against a sentinal
condition, the acompanying function is ran. A default condition can be passed
and a final callback passed for the default condition.</p>
<p>Example:
FN.case(9, 1, () =&gt; 1<em>2, 2, () =&gt; 2</em>2, 3, () =&gt; 3*2, FN.default, () =&gt; 19);</p>
</dd>
<dt><a href="#sum">sum(...lst)</a> ⇒</dt>
<dd><p>FN.sum is a function that takes a variable number of arguments and returns
the sum of all arguments all arguments must be numbers, if not an error
will be thrown.</p>
<p>Example:
FN.sum(1, 2, 3, 4, 5);</p>
</dd>
</dl>

<a name="fn"></a>
## fn
**Kind**: global class  
**Author:** Neil Munro <neilmunro@gmail.com>  
<a name="new_fn_new"></a>
### new fn()
FN is a functional library providing functionsinspired (ripped off) by LISP/Clojure.No, I have no shame.This is kinda just research, experimenting withfunctional programming in JS. If you howeverfind this library useful let me know and I'llkeep working on it, if you have suggestions, Imight even incorporate your ideas.This is designed to be used from within ES6.Other older versions of ES may not work properly.Copyright (c) Neil Munro 2015-2016.

<a name="any"></a>
## any(cb, lst) ⇒
FN.any is a function which evaluates a number ofexpressions and runs a callback function ifany of the expressions are true.Example:FN.any(() => {  console.log("One of the expressions is true.");}, 1 === 1, 5 === 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: () =>  {...} |
| lst | <code>array</code> | The arguments to FN.any. FN.any takes a variable number of arguments and processes them all as if they were an array. |

<a name="all"></a>
## all(cb, lst) ⇒
FN.all is a function which evaluates a number ofexpressions and runs a callback function ifall of the expressions are true.Example:FN.all(() => {  console.log("All of the expressions are true.");}, 1 === 1, 5 === 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: () =>  {...} |
| lst | <code>array</code> | The arguments to FN.all. FN.all takes a variable number of arguments and processes them all as if they were an array. |

<a name="first"></a>
## first(cb, lst) ⇒
FN.first runs a callback with the first element ofa list as its one and only parameter. The listin question is just a set of values passed to first.Example:FN.first((firstElement) => {  console.log(firstElement);}, 1, 2, 3, 4, 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: (firstElement) =>  {...} |
| lst | <code>array</code> | The arguments to FN.first. FN.first takes a variable number of arguments and processes them all as if they were an array. |

<a name="last"></a>
## last(cb, lst) ⇒
FN.last is the inverse of FN.first and instead ofpassing the first element of a list into a callbackpasses the last element passed to FN.last.Example:FN.last((lastElement) => {  console.log(lastElement);}, 1, 2, 3, 4, 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  
**See**: FN.first  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: (lastElement) =>  {...} |
| lst | <code>array</code> | The arguments to FN.last. FN.last takes a variable number of arguments and processes them all as if they were an array. |

<a name="nth"></a>
## nth(cb, n, lst) ⇒
FN.nth complements FN.first and FN.last by providinga means to grab an arbitrary element in a list by numericindex. The callback is executed with the second argument toFN.nth being the index and the rest of the arguments convertedto the list of items to grab the index of.Example:FN.nth((nthElement) => {  console.log(nthElement);}, 2, 1, 2, 3, 4, 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  
**See**

- FN.first
- FN.last


| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: (nthElement) =>  {...} |
| n | <code>number</code> | The nth element in the list to try and get. |
| lst | <code>array</code> | The arguments to FN.nth. FN.nth takes a variable number of arguments and processes them all as if they were an array. |

<a name="rest"></a>
## rest(cb, lst) ⇒
FN.rest complements FN.first by passing everythingexecept the first element into a callback.Example:FN.rest((remainingElements) => {  remainingElements.forEach((element) => {   console.log(element);  });}, 1, 2, 3, 4, 5);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  
**See**: FN.first  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: (remainingElements) =>  {...} |
| lst | <code>array</code> | The arguments to FN.rest. FN.rest takes a variable number of arguments and processes them all as if they were an array. |

<a name="take"></a>
## take(cb, n, lst) ⇒
FN.take runs the supplied callback with a number and alist of items. The supplied callback is executed withan array containing the first n elements in the list ofitems passed into FN.take.Example:FN.take((elements) => {  elements.forEach((element) => {    console.log(element);  });}, 2, "Lions", "Tigers", "Bears");FN.take((elements) => { elements.forEach((element) => {   console.log(element); });}, 2, ["Lions", "Tigers", "Bears"]);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: (elements) =>  {...} |
| n | <code>number</code> | The number of elements to take from the remaining arguments. |
| lst | <code>array</code> | The arguments to FN.take. FN.take takes a variable number of arguments and processes them all as if they were an array. |

<a name="if"></a>
## if(cb, lst) ⇒
FN.if is a single branch function. It expects acallback and any number of values. The valuesare treated as if they were a list and thecallback is executed with no arguments.Example:FN.if(() => {  console.log("Is true");}, 1 === 1, 2 === 2);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  
**See**: FN.ifElse  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: () =>  {...} |
| lst | <code>array</code> | The arguments to FN.if. FN.if takes a variable number of arguments and processes them all as if they were an array. |

<a name="ifElse"></a>
## ifElse(cb1, cb2, lst) ⇒
FN.ifElse expands upon FN.if by permitting the userto provide a second callback function to be executedin the event that the if expression evaluates to false.NOTE: Multiple FNi.fElse can be nested inside of the callback functions.Example:FN.ifElse(() => {  console.log("Is true");}, () => { console.log("Is false");}, 1 === 1, 2 === 2);

**Kind**: global function  
**Returns**: The result of the callback or undefined.  
**See**: FN.if  

| Param | Type | Description |
| --- | --- | --- |
| cb1 | <code>function</code> | The callback to execute in the form: () =>  {...} if true. |
| cb2 | <code>function</code> | The callback to execute in the form: () =>  {...} if false. |
| lst | <code>array</code> | The arguments to FN.ifElse. FN.ifElse takes a variable number of arguments and processes them all as if they were an array. |

<a name="let"></a>
## let(cb, objectContext) ⇒
FN.let creates a new isolated execution context with a set of values initilisedwithin the context and visible only for the duration of the callback function.Note that it acts as a closure and does have access to outer variables.Example:FN.let(function() {  console.log("Hi my name is " + this.name + " and I am " + this.age + " years old.");}, {"age": 29, "name": "Neil Munro"});

**Kind**: global function  
**Returns**: The return value of the callback function.  
**See**: FN.if  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: function() {...}. You MUST use the original function() {} form as these bind a 'this' value to the scope that FN.let provides. |
| objectContext | <code>object</code> | An object containing the key/value pairs that are to be created inside the execution context. |

<a name="range"></a>
## range(lst) ⇒ <code>array</code>
FN.range generates and array of numeric values based on criteria thatthe programmer enters.Example:FN.range(0, 10, 1);

**Kind**: global function  
**Returns**: <code>array</code> - - The array built from lst.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The array of constraints that can be passed in. |

<a name="cond"></a>
## cond(lst) ⇒
FN.cond is analogous to a switch statement. It evaluates each expressionin turn until it first the first one that evaluates to true and runs its acompanying function.Example:FN.cond(  1 === 2, () => { console.log("first");  },  2 === 3, () => { console.log("second");  },  "tmp" === "tmp", () => { console.log("third");  });

**Kind**: global function  
**Returns**: The result of the executed function or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | An array of expression/function pairs to evaluate/run. |

<a name="alternate"></a>
## alternate(cb, arr, step) ⇒
FN.alternate is a function for applying the callback for every N elemet inan array.Example:FN.alternate((elm) => { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);

**Kind**: global function  
**Returns**: undefined.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The function to apply to n elements of the array. |
| arr | <code>array</code> | The array containing the elements to apply the function to. |
| step | <code>number</code> | The interval of steps to apply a function to. |

<a name="case"></a>
## case(val, lst) ⇒
FN.case is a function that evaluates a set of conditions against a sentinalcondition, the acompanying function is ran. A default condition can be passedand a final callback passed for the default condition.Example:FN.case(9, 1, () => 1*2, 2, () => 2*2, 3, () => 3*2, FN.default, () => 19);

**Kind**: global function  
**Returns**: The result of the executed function or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> &#124; <code>string</code> | The sentinal condition. |
| lst | <code>array</code> | The condition/function pairs to check against the sentinal and execute, if true. |

<a name="sum"></a>
## sum(...lst) ⇒
FN.sum is a function that takes a variable number of arguments and returnsthe sum of all arguments all arguments must be numbers, if not an errorwill be thrown.Example:FN.sum(1, 2, 3, 4, 5);

**Kind**: global function  
**Returns**: The sum of the provided arguments.  
**Throws**:

- <code>InvalidArgumentsException</code> Arguments must be numbers.


| Param | Type | Description |
| --- | --- | --- |
| ...lst | <code>number</code> | The list of numbers to sum. |

