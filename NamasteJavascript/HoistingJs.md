# Hoisting in JavaScript

We have learnt many things related to Execution context, now it's time to see it's real application.

Suppose we have a program like this

```js
function calc(size){
  for(let i=1;i<=size;i++){
    console.log(i);
  }
}
let size = 5;
console.log(calc)
console.log(size)
```

So in this we would expect that the output would be

```
f calc(){
 for(let i=1;i<=size;i++){
    console.log(i);
  }
}
5
```

and it's correct but when we use this code 


```js
console.log(calc)
console.log(size)
function calc(size){
  for(let i=1;i<=size;i++){
    console.log(i);
  }
}
let size = 5;
```

We get different output of

```
undefined
f calc(){
 for(let i=1;i<=size;i++){
    console.log(i);
  }
}
```

Why? This is because of the execution context, the memory is allocated first line by line as a key value pair and the default value of variable is set to undefined and stored in global exec context memory, hence when we print it before initializing it prints undefined and for the funcion we know that whole code is stored as a key value pair hence it is printed.

Suppose we don't initialize a variable in our code then? what would happen? suppose this is the code


```js
console.log(calc)
console.log(size)
function calc(size){
  for(let i=1;i<=size;i++){
    console.log(i);
  }
}
```

Then there will be no memory allocated by the js enginer during the memory allocation phase and in the code exec phase we want to log it's value which will result in an error.
