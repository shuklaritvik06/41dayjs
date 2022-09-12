Whenever we pass a callback to a function it is stored in a memory space and its reference is stored in the callback queue when we call the function  the event loop constantly checks if the call stack is empty or not and when it is empty callback refernce is moved to the call stack and the code is executed.  
Microtask queue, are those queue which has more priority over the callback queue, these are the queue for the callback function which are executed depending on the Promise. 

