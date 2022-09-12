```js
function a(){
  c();
  function c(){
    console.log(b);
  }
}
var b = 30;
```

Lexical means sequence or heirachy. Whenver a new Execution context is created a lexical environment is also created, in each execution context in the variable environment,it also has a reference to the lexical environment of the parent.

So in the above program we can see that the c() has a lexical parent a() and the a() has  a lexical parent of global scope and the global scope has also a lexical environment which points to null.

When we try to access any variable js engine first tries to find it in the local memory of that execution context and then it goes to the lexical parent of parent and search there and if it got that it would be used.
