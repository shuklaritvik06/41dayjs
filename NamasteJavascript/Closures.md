# Closures

```js
function a(){
  var c =34;
  function b(){
    console.log(c)
  }
  b();
}
a();
```

So , closures is just the func bundled together with it's parent lexical environment reference.

```js
function a(){
  var c =34;
  function b(){
    console.log(c)
  }
  return b;
}
var z = a();
z();
```
When we return the function from the function it will remember it's lexical environment reference, seedhi baat (apna purana janam yaad rkhta hai ki uske saath kya kya hua tha)
So when we returned the func, a whole closure was returned with a func bundled together with its lexical environment.

