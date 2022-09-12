## Callback

```js
setTimeout(function(){
  console.log("Hello World!");
},5000)
function b(param){
  console.log("b");
  param();
}
b(function a(){
  console.log("a");
})
```
Callbacks are those functions which are passed into another function. The function to which this is passed as a parameter has a full authority that when it want this to execute.
Best example for this is setTimeout function here we pass the function as a parameter and it is stored in some memory space and the js engine remembers its reference , when the function is called, it search and execute the same.
