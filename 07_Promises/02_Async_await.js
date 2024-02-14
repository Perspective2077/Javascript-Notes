// Async Wait : features in JavaScript that make working with asynchronous code more concise and easier to read. These keywords were introduced in ECMAScript 2017 (ES8).
// It gives "Promise" a more convenient syntax for working with them , improving readability and reducing the "callback hell" or "pyramid of doom" associated with nested callbacks.
// The terms "callback hell" or "pyramid of doom" refer to a situation in JavaScript where multiple nested callbacks(functions)  make the code hard to read and maintain

// Syntax


// "async" : 
// The "async" keyword is used to declare an asynchronous function. An asynchronous function returns a promise implicitly(Even there is no promise inside the function , it will return it), allowing you to use the await keyword inside it.
// for making an function async just use "async" before a function and it automatically will declare the function asynchronous after that
const async = async ()=>{
    // This Block of code become a Asynchronous operations
    return "Async function completed";
}


// "await" :
// The "await" keyword can only be used inside an async function. It ensures that the next line of code is not executed until the existing asynchronous operation is complete is either resolve or reject , Note : "await" only block the execution inside the perticular "async" function only  ,not anything outside it 
async function fetchData() {
    // Simulating an asynchronous operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 1000)})  
} 

async function myAsyncFunction() {
      const result = await fetchData();  // This is possible because the "await" expression unwraps the resolved value from the promise. so wheather the promise is resolved or rejected , the "await" method will unwraps the value from Promises
      // console.log(result);
}
myAsyncFunction();
// In this example, fetchData is an asynchronous function that returns a promise. Inside myAsyncFunction, await before "fetchData()" pauses the execution of code inside the perticular async fnc until the promise is resolved, making it look like synchronous(blocking code) code.Once fetchData() is resolved ,the output will be stored inside "result" variable because of "await" method






// Fetch()
// It is a modern JavaScript API for making network requests (HTTP requests). It provides a more powerful and flexible interface compared to the older "XMLHttpRequest" object.It is commonly used for fetching resources, such as data from an API, and working with server responses.
// syntax
fetch("https://api.github.com/users/I-am-Perspective")
// It takes two parameters 1. A Http URl 2.Optionals : it can methods(talked in "xhrHttpRequest") and headers and body and mode, Check all arguments u can use ("https://developer.mozilla.org/en-US/docs/Web/API/fetch")
// It returns a Promise and the resolve,reject of that promise is upto the request response, whether it is successful or not .