// Polyfills

let myObj = {
  age: 23,
  name: "Ritvik",
};

function hello() {
  console.log(`Hey I am ${this.name} and my age is ${this.age}`);
}

Function.prototype.mineBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

hello.mineBind(myObj)();

// Function Currying

// - By using Bind Function
// - By using Closures

let myFunction = function (x, y, z) {
  console.log(x + y + z);
};

newFunc = myFunction.bind(this, 2);
newFunc(3, 4);

let myClosure = function (x) {
  return function (y, z) {
    console.log(x + y + z);
  };
};

newFunc2 = myClosure(2);
newFunc2(3, 4);

// Debouncing

function debounce(func, waitTime) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(func.apply(context, args), waitTime);
  };
}

debounce(function () {
  console.log("fetching....");
}, 500);

// Throttling

function throttle(func, waitTime) {
  let prev = 0;
  return function () {
    let context = this;
    let args = arguments;
    let now = new Date().getTime();
    if (now - prev > waitTime) {
      func.apply(context, args);
      prev = now;
    }
  };
}

throttle(() => {
  console.log("Hello");
}, 300)();

// Event Bubbling, Capturing aka Trickling, Delegation

// Event Bubbling => Moves Up to the Heirarchy
// Capturing =>  Moves down the Heirarchy

// First Capturing happens then the bubbling

// Delegation is to improve the performance, we can use the event bubbling concept to do this delegation of events up the tree.

// CORS

// https://abc.com != http://abc.com
//  https://abc.com != https://bc.com
// https://abc.com:5000 != https://abc.com:3000

// Headers

// Cors Preflight mechanism => A preflight options call is made
// Access-control-allow-origin: domain | *

// Execution Context

// It has two parts=> Memory Component (Variable Environment) & Code Component (Thread of Exec)

// Call Stack

// Whenever a function is invoked a whole new execution context is created

//  Whenever a GEC created a this is created which points to the window

// Event Loop

// - JS is a single threaded lang
// - One call stack is there
// - Settimeout is not a part of js (A web api), localstorage,location

// Event Loop and Callback Queue

// When the timer expires the function is kept inside the callback queue and then the event loop job is to check whether we have something in callback queue and push to the call stack if its empty. 

// Microtask Queue

// higher priority

// The network call and the promises are pushed to the micro task queue
