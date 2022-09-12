## let and const

```js
console.log(b);
console.log(a);
let a;
var b = 45;
```

We have studied that in js the memory is allocated before the start of the program execution, so here the memory for a and b both is allocated but as we are using let keyword with the variable a so it will be allocated memory in a separate script scope space, which is not accessible till not initialized. But var has default placeholder undefined with it. The time between the hoisting and let or const keyword variable initialization is called temporal dead zone. Whenever we will try to access a variable in temporal dead zone then the js engine gives ReferenceError. 

Whenver we will try to redeclare the let/const keyword variable it will give SyntaxError. If this error is thrown js engine will not execute a single line of code further.

const is a bit more strict that let, it doesn't even allows the initialization after the declaration. All should be done at once. It will give type error if we try to update the const value.
