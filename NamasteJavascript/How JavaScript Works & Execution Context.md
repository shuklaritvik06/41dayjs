- In JavaScript all of the executions is done in the execution context.
- Execution context has two component, a VARIABLE ENVIRONMENT where all the variables and functions are stored as a key value pair. A Code Component where the code is executed one line at a time, Known as a thread of execution.
- Javascript is a synchronous single threaded language. It can execute only one command at a time and in a  specific order.

### How Code is executed in Javascript ?

Suppose we have a code like this

```js
function calc(size){
  for(let i=1;i<=size;i++){
    console.log(i);
  }
}
let size = 5;
let result = calc(size);
```

Now on running this code, the code is executed in two phases, first is a Memory allocation phase: in the execution context the variables and functions are allocated a memory space and stored in a key value pair.
In the second phase the code is executed line by line , first the size variable default value undefined is replaced with actual 5, then there is a invokation of function calc, now a new execution context is made in code component, there same two phases are done, memory allocation and code execution, whenever we encounter the last line of the function or the return statement
execution control is transferred to the global execution context and this is deleted.

So doesn't it will become hard for the js engine to manage if we have a deep level of func invocation. So for this problem js has a concept of **CALL STACK** which is a simple stack in which the global exec context is at the bottom and whenever new context comes it is pushed into the stack and on completion popped out and controll is transferred back to the GEC.
After complete execution GEC is also popped out of the stack. Call stack beautifully maintain the execution order of the exec context. It is known  by various names like machine stack,runtime stack, prog stack etc.
