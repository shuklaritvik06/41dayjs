Better Performance, Download file when needed

```js
import('./module.js').then((module)=>{
   console.log(module)
})
```

Suppose we want to run certain code depending on a certain condition but if we will import default way then it will be downloaded for all the users hence we will do prefer dynamic import

```js
if(condition){
 import('./module.js').then((module)=>{
   console.log(module)
  }) 
}
```

Or when we have multiple choices and depending on the choice we have to execute certain code, like in translation

```js
import(`${user.local}.js`).then((module)=>{
      console.log(module);
})
```

Suppose we have to import default file if we not got others then


```js
import(`${user.local}.js`).catch(()=>import('en.js')).then((module)=>{
      console.log(module);
})
```
