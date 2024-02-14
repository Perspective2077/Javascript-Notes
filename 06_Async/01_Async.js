// Async ( aka Asynchronous) : fnc/methods that doesn't block the execution of the rest of the program while waiting(not fixed) for an asynchronous("raam bharose") operation to complete.
// We can write code in js as these two ways :
// 1. Blocking code : It means a Block of code that is dependent on other operations in the code , Compiler wont execute the code further until a Operation gets executed completely i.e. Reading a file (Reading a file isnt a easy work , Whenever a command runs to read a specific file ,compiler directly talks with kernel of the system and give the kernel a context(value) that the program needs to read and then kernel will read the file in the system and will give back the piece of info to the program and same goes for creating a file where you needs permission of kernel to do anycreation) , fetching data 
// 2. Non Blocking code (Aka Async code) : It means the code isn't dependent on other operations , Compiler will continue execute other code while waiting for certain operations


// As we know js is single threaded language so all operations will be executed One by One(Blocking code) but Browser And Other runtime env have there own Api to Make js code "async" to replicate js an Async language
// So browser(Other runtime env have different methods) have methods which we can use to run some execution in Asynchronous way  i.e. Event Handlers , timeouts fnc etc
// whenever u add Browsers Methods( i.e. setTimeout or AJAX etc.) they don't go in "call stack" to get executed Instead they handed over to the browser's Web APIs for execution and Once the asynchronous operation is complete(an event triggered or some data get fetched) , a callback (function that runs after a operation) associated with that async operation is placed in the callback queued(lined) up in the "task queue"(aka "callback queue" that refer to the queue that holds callbacks of completed asynchronous operations), that follows FIFO (first-in, first-out) order , then it check if all Asynchronous operations execution is done in "call stack" , if yes then all "task queue" callbacks will come inside one by one "call stack" and get executed , All this is checked by "Event loop"
// Note : "Promises" have a hight prirority queue (promise queue / Priority queue) that is being prirortise over regular callback queue callbacks (not necessarily over all asynchronous operations) 


// Two mainly used browser async Methods
// Set-timout : execute block of code after a specific time
let time = 1000
setTimeout(() => {
  // Your code goes here 
}, time) // time that u should wait before the specified function or code is executed ( in milisecond ) , u can add unlimited parameters(optional) after the first two parameters (followed by ",") i.e. callback and time

// Set-Interval : execute block of code repeatedly at the specified time intervals.
setInterval(() => {
  // Your code goes here 
},time)    // time invertal that the specified function or code will executed after n after ( in milisecond )
// To remove timeouts or interveal method , u should store those method inside an variable and use "clearInterval"/"clearTimeout" method


let timeoutId = setTimeout(() => {
    // Your code goes here 
}, time);
clearTimeout(timeoutId )  // removed that specific Timeout fnc


let intervalID = setInterval(() => {
    // Your code goes here 
}, time);
clearInterval(intervalID)  // removed that specific interval fnc
