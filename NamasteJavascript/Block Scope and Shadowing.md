# Block Scope and Shadowing

## BLOCK

So this is the block in the js, you can say block is a group of more than one statements. It is used when we want to execute more than one statement, and only one can be supplied so this behaves as a single block, like if
```js
{

}
```
Suppose we have a program like this

```js
{
  var a = 12;
  let b = 34;
  const c = 45;
  console.log(a);
  console.log(b);
  console.log(c);
}
  console.log(a);
  console.log(b);
  console.log(c);
```

In this when we would run the program a different space is allocated for let/const and var is allocated memory in  the global scope. So we can access the let/const here only in the block scope, and var is accessible in the global scope.

So this is why we said let/const block scoped.

### Shadowing

```js

  var a = 10;
  {
  var a = 12;
  let b = 34;
  const c = 45;
  console.log(a); 
  console.log(b);
  console.log(c);
  }
  console.log(a);
```

In the above program , we have created a variable in the global scope with the same name then the variable in the block shadows the global scope variable and also updates it value.

But if we will use let/const here


```js

  let b = 10;
  const c = 20;
  {
  var a = 12;
  let b = 34;
  const c = 45;
  console.log(a); 
  console.log(b);
  console.log(c);
  }
  console.log(a);
```

Then here the let and const variable in the global scope it will be allocated memory in a script scope and the block declared vars would be declared in the block memory scope in the execution context. So when we will print it, it will print the variables value accordingly. var is function scoped.


```js
function a(){
  var b=45;
}
console.log(b)  // b is not defined error
```
