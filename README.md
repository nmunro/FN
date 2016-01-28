## Classes

<dl>
<dt><a href="#fn">fn</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#any">any(lst)</a> ⇒ <code>boolean</code></dt>
<dd><p>FN.any is a function which evaluates a number of
expressions and returns true if ANY of the expressions
themselves are true.</p>
<p>Example(s):</p>
<p>FN.any([1 === 1, 5 === 5]);</p>
</dd>
<dt><a href="#all">all(lst)</a> ⇒ <code>boolean</code></dt>
<dd><p>FN.all is a function which evaluates a number of
expressions and returns true only if ALL of the
expressions are themselves true.</p>
<p>Example(s):</p>
<p>FN.all([1 === 1, 5 === 5]);</p>
</dd>
<dt><a href="#first">first(lst)</a> ⇒ <code>object</code></dt>
<dd><p>FN.first returns the first element of a list.</p>
<p>Example(s):</p>
<p>FN.first([1, 2, 3, 4, 5]);</p>
</dd>
<dt><a href="#last">last(lst)</a> ⇒ <code>object</code></dt>
<dd><p>FN.last is the inverse of FN.first and returns the final element in a list.</p>
<p>Example(s):</p>
<p>FN.last([1, 2, 3, 4, 5]);</p>
</dd>
<dt><a href="#nth">nth(lst, n)</a> ⇒ <code>object</code></dt>
<dd><p>FN.nth complements FN.first and FN.last by providing
a means to grab an arbitrary element in a list by numeric
index. </p>
<p>Example(s):</p>
<p>FN.nth([1, 2, 3, 4, 5], 2);</p>
</dd>
<dt><a href="#rest">rest(lst)</a> ⇒ <code>array</code></dt>
<dd><p>FN.rest complements FN.first by passing everything
execept the first element into a callback.</p>
<p>Example(s):</p>
<p>FN.rest([1, 2, 3, 4, 5]);</p>
</dd>
<dt><a href="#take">take(lst, n)</a> ⇒ <code>array</code></dt>
<dd><p>FN.take returns a new list from the n number of elements from the
list passed into it.</p>
<p>Example(s):</p>
<p>FN.take([&quot;Lions&quot;, &quot;Tigers&quot;, &quot;Bears&quot;], 2);</p>
<p>FN.take(FN.range(10, 0, 2), 2);</p>
</dd>
<dt><a href="#if">if(cb, cond)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>FN.if is a single branch function. It expects a
callback and a single boolean expression.</p>
<p>NOTE: FN.any and FN.all can be used here.</p>
<p>Example(s):</p>
<p>FN.if(() =&gt; {
  console.log(&quot;Is true&quot;);
}, true);</p>
<p>FN.if(() =&gt; {
  console.log(&quot;Is true&quot;);
}, FN.any([1 === 1, 2 === 2]));</p>
</dd>
<dt><a href="#ifElse">ifElse(cb1, cb2, cond)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>FN.ifElse expands upon FN.if by permitting the user
to provide a second callback function to be executed
in the event that the if expression evaluates to false.</p>
<p>NOTE: Multiple FN.fElse can be nested inside of the callback functions.</p>
<p>Example(s):</p>
<p>FN.ifElse(() =&gt; {
  console.log(&quot;Is true&quot;);
}, () =&gt; {
 console.log(&quot;Is false&quot;);
}, true);</p>
<p>FN.ifElse(() =&gt; {
  console.log(&quot;Is true&quot;);
}, () =&gt; {
 console.log(&quot;Is false&quot;);
}, FN.all([1 === 1, 2 === 2]));</p>
</dd>
<dt><a href="#let">let(cb, objectContext)</a> ⇒ <code>object</code></dt>
<dd><p>FN.let creates a new isolated execution context with a set of values initilised
within the context and visible only for the duration of the callback function.
Note that it acts as a closure and does have access to outer variables.</p>
<p>Example(s):</p>
<p>FN.let(function() {
  console.log(&quot;Hi my name is &quot; + this.name + &quot; and I am &quot; + this.age + &quot; years old.&quot;);
}, {&quot;age&quot;: 29, &quot;name&quot;: &quot;Neil Munro&quot;});</p>
</dd>
<dt><a href="#range">range([start], stop, [step])</a> ⇒ <code>array</code></dt>
<dd><p>FN.range generates and array of numeric values based on criteria that
the programmer enters.</p>
<p>Example(s):</p>
<p>FN.range(0, 10, 1);</p>
</dd>
<dt><a href="#cond">cond(...lst)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>FN.cond is analogous to a switch statement. It evaluates each expression
in turn until it first the first one that evaluates to true and runs its
acompanying function.</p>
<p>Example(s):</p>
<p>FN.cond(
  1 === 2, () =&gt; { console.log(&quot;first&quot;);  },
  2 === 3, () =&gt; { console.log(&quot;second&quot;);  },
  &quot;tmp&quot; === &quot;tmp&quot;, () =&gt; { console.log(&quot;third&quot;);  }
);</p>
</dd>
<dt><a href="#everyOther">everyOther(cb, arr, step)</a> ⇒ <code>undefined</code></dt>
<dd><p>FN.everyOther is a function for applying the callback for every N elemet in
an array.</p>
<p>Example(s):</p>
<p>FN.everyOther((elm) =&gt; { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);</p>
</dd>
<dt><a href="#case">case(val, ...lst)</a> ⇒ <code>object</code> | <code>undefined</code></dt>
<dd><p>FN.case is a function that evaluates a set of conditions against a sentinal
condition, the acompanying function is ran. A default condition can be passed
and a final callback passed for the default condition.</p>
<p>Example(s):</p>
<p>FN.case(9, 1, () =&gt; 1<em>2, 2, () =&gt; 2</em>2, 3, () =&gt; 3*2, FN.default, () =&gt; 19);</p>
</dd>
<dt><a href="#sum">sum(lst)</a> ⇒ <code>number</code> | <code>undefined</code></dt>
<dd><p>FN.sum is a function that takes a variable number of arguments and returns
the sum of all arguments all arguments must be numbers, if not undefined 
is returned.</p>
<p>Example(s):</p>
<p>FN.sum([1, 2, 3, 4, 5]);</p>
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
## any(lst) ⇒ <code>boolean</code>
FN.any is a function which evaluates a number ofexpressions and returns true if ANY of the expressionsthemselves are true.Example(s):FN.any([1 === 1, 5 === 5]);

**Kind**: global function  
**Returns**: <code>boolean</code> - The result of any of the expressions being true.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The list of boolean expressions to FN.any. |

<a name="all"></a>
## all(lst) ⇒ <code>boolean</code>
FN.all is a function which evaluates a number ofexpressions and returns true only if ALL of theexpressions are themselves true.Example(s):FN.all([1 === 1, 5 === 5]);

**Kind**: global function  
**Returns**: <code>boolean</code> - The result of all of the expressions being true.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The list of boolean expressions to FN.all. |

<a name="first"></a>
## first(lst) ⇒ <code>object</code>
FN.first returns the first element of a list.Example(s):FN.first([1, 2, 3, 4, 5]);

**Kind**: global function  
**Returns**: <code>object</code> - The first element of the list or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The list to get the first element of. |

<a name="last"></a>
## last(lst) ⇒ <code>object</code>
FN.last is the inverse of FN.first and returns the final element in a list.Example(s):FN.last([1, 2, 3, 4, 5]);

**Kind**: global function  
**Returns**: <code>object</code> - The last element of the list or undefined.  
**See**: FN.first  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The arguments to FN.last. |

<a name="nth"></a>
## nth(lst, n) ⇒ <code>object</code>
FN.nth complements FN.first and FN.last by providinga means to grab an arbitrary element in a list by numericindex. Example(s):FN.nth([1, 2, 3, 4, 5], 2);

**Kind**: global function  
**Returns**: <code>object</code> - The nth element of the list or undefined.  
**See**

- FN.first
- FN.last


| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The list to get the nth element of. |
| n | <code>number</code> | The nth element in the list to try and get. |

<a name="rest"></a>
## rest(lst) ⇒ <code>array</code>
FN.rest complements FN.first by passing everythingexecept the first element into a callback.Example(s):FN.rest([1, 2, 3, 4, 5]);

**Kind**: global function  
**Returns**: <code>array</code> - The rest of the list or undefined.  
**See**: FN.first  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The arguments to FN.rest. |

<a name="take"></a>
## take(lst, n) ⇒ <code>array</code>
FN.take returns a new list from the n number of elements from thelist passed into it.Example(s):FN.take(["Lions", "Tigers", "Bears"], 2);FN.take(FN.range(10, 0, 2), 2);

**Kind**: global function  
**Returns**: <code>array</code> - A new list made up of the n number of elements, if n is bigger than the list the whole list is returned.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The arguments to FN.take. |
| n | <code>number</code> | The number of elements to take from the array lst. |

<a name="if"></a>
## if(cb, cond) ⇒ <code>object</code> &#124; <code>undefined</code>
FN.if is a single branch function. It expects acallback and a single boolean expression.NOTE: FN.any and FN.all can be used here.Example(s):FN.if(() => {  console.log("Is true");}, true);FN.if(() => {  console.log("Is true");}, FN.any([1 === 1, 2 === 2]));

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>undefined</code> - The result of the callback or undefined.  
**See**: FN.ifElse  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute if true. |
| cond | <code>boolean</code> | The single boolean expression to FN.if. |

<a name="ifElse"></a>
## ifElse(cb1, cb2, cond) ⇒ <code>object</code> &#124; <code>undefined</code>
FN.ifElse expands upon FN.if by permitting the userto provide a second callback function to be executedin the event that the if expression evaluates to false.NOTE: Multiple FN.fElse can be nested inside of the callback functions.Example(s):FN.ifElse(() => {  console.log("Is true");}, () => { console.log("Is false");}, true);FN.ifElse(() => {  console.log("Is true");}, () => { console.log("Is false");}, FN.all([1 === 1, 2 === 2]));

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>undefined</code> - The result of the callback or undefined.  
**See**: FN.if  

| Param | Type | Description |
| --- | --- | --- |
| cb1 | <code>function</code> | The callback to execute in the form: () =>  {...} if true. |
| cb2 | <code>function</code> | The callback to execute in the form: () =>  {...} if false. |
| cond | <code>boolean</code> | The boolean expression to FN.ifElse. |

<a name="let"></a>
## let(cb, objectContext) ⇒ <code>object</code>
FN.let creates a new isolated execution context with a set of values initilisedwithin the context and visible only for the duration of the callback function.Note that it acts as a closure and does have access to outer variables.Example(s):FN.let(function() {  console.log("Hi my name is " + this.name + " and I am " + this.age + " years old.");}, {"age": 29, "name": "Neil Munro"});

**Kind**: global function  
**Returns**: <code>object</code> - The return value of the callback function.  
**See**: FN.if  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The callback to execute in the form: function() {...}. You MUST use the original function() {} form as these bind a 'this' value to the scope that FN.let provides. |
| objectContext | <code>object</code> | An object containing the key/value pairs that are to be created inside the execution context. |

<a name="range"></a>
## range([start], stop, [step]) ⇒ <code>array</code>
FN.range generates and array of numeric values based on criteria thatthe programmer enters.Example(s):FN.range(0, 10, 1);

**Kind**: global function  
**Returns**: <code>array</code> - The array built from lst.  

| Param | Type | Description |
| --- | --- | --- |
| [start] | <code>number</code> | The number to start from. |
| stop | <code>number</code> | The number to go to. |
| [step] | <code>number</code> | The number of steps/intervals. |

<a name="cond"></a>
## cond(...lst) ⇒ <code>object</code> &#124; <code>undefined</code>
FN.cond is analogous to a switch statement. It evaluates each expressionin turn until it first the first one that evaluates to true and runs itsacompanying function.Example(s):FN.cond(  1 === 2, () => { console.log("first");  },  2 === 3, () => { console.log("second");  },  "tmp" === "tmp", () => { console.log("third");  });

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>undefined</code> - The result of the executed function or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| ...lst | <code>boolean</code> &#124; <code>function</code> | An array of expression/function pairs to evaluate/run. |

<a name="everyOther"></a>
## everyOther(cb, arr, step) ⇒ <code>undefined</code>
FN.everyOther is a function for applying the callback for every N elemet inan array.Example(s):FN.everyOther((elm) => { console.log(elm);  }, [0, 1, 2, 3, 4, 5, 6], 2);

**Kind**: global function  
**Returns**: <code>undefined</code> - everyOther does not return anything it applies a callback forevery other element in a list.  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | The function to apply to n elements of the array. |
| arr | <code>array</code> | The array containing the elements to apply the function to. |
| step | <code>number</code> | The interval of steps to apply a function to. |

<a name="case"></a>
## case(val, ...lst) ⇒ <code>object</code> &#124; <code>undefined</code>
FN.case is a function that evaluates a set of conditions against a sentinalcondition, the acompanying function is ran. A default condition can be passedand a final callback passed for the default condition.Example(s):FN.case(9, 1, () => 1*2, 2, () => 2*2, 3, () => 3*2, FN.default, () => 19);

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>undefined</code> - The result of the executed function or undefined.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> &#124; <code>string</code> | The sentinal condition. |
| ...lst | <code>number</code> &#124; <code>string</code> &#124; <code>boolean</code> &#124; <code>function</code> | The condition/function pairs to check against the sentinal and execute, if true. |

<a name="sum"></a>
## sum(lst) ⇒ <code>number</code> &#124; <code>undefined</code>
FN.sum is a function that takes a variable number of arguments and returnsthe sum of all arguments all arguments must be numbers, if not undefined is returned.Example(s):FN.sum([1, 2, 3, 4, 5]);

**Kind**: global function  
**Returns**: <code>number</code> &#124; <code>undefined</code> - The sum of the provided arguments.  

| Param | Type | Description |
| --- | --- | --- |
| lst | <code>array</code> | The list of numbers to sum. |

