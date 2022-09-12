# Promises

```js
let p = new Promise((resolve,reject)=>{
  let a = 4;
  if(a===4){
    resolve('Good');
  }else{
    reject('Bad');
    }
})
p.then((message)=>{
  console.log(message)
  }).catch((message)=>{
      console.log(message)  
  });

```
For multiple promises at once


```js
Promise.all([]).then().catch();
```

- Promise.any()

```js
Promise.any([]).then(()=>{})  // returns a promise with the value of the promise successfully fulfilled
```

- Promise.all()

```js
Promise.all([]).then(()=>{})  // returns a promise with the array of all the values of the promise
```

- Promise.allSettled()

```js
Promise.allSettled([]).then(()=>{})  // returns a promise with the array of the results of the all promises

```

- Promise.race()

```js
Promise.race([]).then(()=>{})  // returns a promise with the value from the first resolved promise
```

- Promise.resolve()

```js
Promise.resolve(value).then(()=>{})  // returns the value on successfull resolve
```

- Promise.reject()

```js
Promise.reject(new Error('fail')).then(resolved, rejected); // returns a promise that is rejected with a reason given
```
