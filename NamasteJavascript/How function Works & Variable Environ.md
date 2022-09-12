```js
var a = 5;
a();
b();
console.log(a);
function a(){
  var a = 5;
  console.log(a)
  }
function b(){
  var a = 15;
  console.log(a)
 }
```

As we know that when we execute a program then the memory is allocated for all the variable in the memory space of that particular execution context. First we can see, we are invoking the function before the actual declaration of the function this is because of the concept called hoisting in js.
Now let's see what is actually being done underneath. The variable a memory is allocated in the global scope. And when the functions are invoked a separate exec context is created with the separate memory space, a local variable a is stored there and the logged in the console. Similarly with the b.

