// Promises : It is an Object with Methods that helps managing asynchronous operations
// The "Promise" provide a way to handle asynchronous code in a more organized and readable manner. The basic idea behind promises is to represent the eventual(end result) completion or failure of an asynchronous operation and allow you to attach callbacks(functions) to be executed when that operation is completed.

// Syntax
// new Promise()  // Note : u had to give argument to promises or it will give you error that there is no parameters
// Creating an instance of promise using "new" keyword , Note : We always create instance of Promise to use it because it's an Object not a fnc

// The Promise constructor(Inside Promise Object) takes a function as an argument, commonly referred to as the "executor" function.
// The "executor function" has two parameters: "resolve" and "reject". These are functions provided by the promise implementation.
// The "executor function" is where you perform an asynchronous operation. Once the operation is complete, you either call resolve with a result(Optional) or you call reject with an error(Optional) to give the promise a response (weather task was successful or not)
const my_promise = new Promise((resolve,reject)=>{
   // Asynchronous operation
  let operationSuccessful = true
  let result = "Username"
  let error = "404"

  if (operationSuccessful) {
    resolve(result); // Resolve the promise with a value
  } else {
    reject(error); // Reject the promise with a reason
  }
})
// These states decide which method("then" and "catch") gonna execute after the "promise" response
// pending: initial state, neither fulfilled nor rejected (Promise didnt gave any response i.e. when neither of parameters are called inside promise)
// fulfilled: meaning that the operation was completed successfully (promise operation resolved i.e. When resolve is called inside promise)
// rejected : meaning that the operation failed (promise operation rejected i.e. When reject is called inside promise)
// so after "promise" finally completed executing the given task ,you can use following methods to attach the callbacks(functions) according to the response of the promise
// When you call "resolve(value)" inside the "executor function", the promise transitions from the "pending" state to the "fulfilled" state.
// The value passed to resolve fnc becomes the "fulfillment"(the value that can be used for "then()" method) value of the promise.
// so Promise contain two values , PromiseState and PromiseResult(Whatever the "callback" Value is giving inside promises)  


// ".then()" 
// Takes two arguments 1.success callback (when the promise is fulfilled) 2. rejection callback (optional, for handling errors).
// first callback(function) of "then()" will only execute when promise is fulfilled but second callback will executed as error handler
// You can use either second argument of "then" as error handler or use ".catch()" method
my_promise.then((result) => {       
    // Handle success
    // console.log(result);
  },
  (result) => {
     // Handle error as second argument of then
    console.log("This operation didnt sucseed :",result);
  })

// ".catch()" : execute when Promise is rejected
// Only takes one Callback(function) as arguments 
my_promise.catch((error) => {
    // Handle error
    console.error(error);
});
// we are using "then()" and "catch()" methods after Promise instance or u can also hold promise into a variable and then use ".then" method  
// Directly using "then()","catch()" methods is same as u use multiple methods at once on a Data ,When u use multiple methods after a data , js used to execute all methods one by one so as in "promises" , it first check result of promises then execute methods according to it


// Chaining
const promise = new Promise((resolve,reject)=>{
   let operationSuccessful = true
   let result = "Password"
   let error = "202"

   if (operationSuccessful) {
     resolve(result); // Resolve the promise with a value
   } else {
     reject(error); // Reject the promise with a reason
   }
 })
// So Promise's "then()" and "catch()" chaining works like Loop ,it will run until something break the loop and Every "then()" Callback return value become the argument for the next "them()" callbacks
// see "then" and "catch" methods work as the callbacks for the operation inside promises but u can also use many callback as you want after a "promise" become true and all callbacks("then()") will be executed one by one (until any then() get rejected) ,without execute the Privious callback(i.e. then() ) next callback won't start 

promise
  .then(() => {
    // Step 1
  })
  .then(() => {
    // Step 2
    // throw new Error("Something went wrong") // Simulating a rejection , Note : u can throw an error in console using this syntax
  })
  .then(() => {
    // Skipped due to rejection
  })
  .catch((error) => {
    // Handle the rejection from Step 2
    console.error("Error:", error);
    // Continue with the next .then() or .catch()
  })
  .then(() => {
    // Continue executing then() after handling the rejection 
  })
  .then(() => {
    // Continue executing then() 
  })
  .catch(() => {
    // Skipped if no further rejections
  });

// .catch() in a promise chain helps handle errors and allows the chain to continue or recover from rejections. If a rejection occurs(the code inside .then() didnt complete and got an error) , control flow jumps to the nearest .catch(), and subsequent(all other) .then() callbacks are skipped until another .catch() is encountered. If there are no rejections, all .then() callbacks are executed in order.


// You can also create a new promises inside .then() as you want , try understanding what is the need then customize promise handling as your wish
new Promise((resolve,reject)=>{
  resolve("The Promise has been resolved ")    // Created promise with fulfilled status
})
.then((message_From_Promise)=>{
  // console.log(message_From_Promise);       // used the values from promise if u want 
  return(new Promise((resolve,reject)=>{ resolve("nested promise is also resolved") })) // returnig a new Promise 
})
// If returned promise is fulfilled then "then()" method will run or if it is rejected then "catch()" or second argument of "then()" will execute
// From now all ".then()" and ".catch()" methods will applied to return promise 
.then((the_Returned_value)=>{
    //  console.log(the_Returned_value);  
})
.catch(()=>{
  console.log("Returned Promise is rejected");  
})
// When a promise is returned in a ".then()" method (just like above), the subsequent(all others) ".then()" and ".catch()" methods are applied to the new promise returned , it start a new chain from that point  , so u can start a new chain every time u return a "promise" known as "Promise chaining"



// .finally() : third callback of promises
// This is used as deafult callbacks for the promises , this callback will always run, regardless of whether the promise is fulfilled or rejected. 
.finally(()=>{ 
  // console.log("this is deafult method");
})
// We are attaching to the promise above , all comments won't effect the code nor the index 




// Note : if u use "then()" without chaining , it will be treated as new callback for the promise and will not be including in changing because u are not doing any chaining (lol)
// for example 
promise.then(()=>{})
promise.then(()=>{})
// both are two different flow of the promise , there is no chaining between them






// "try...catch...finally" : these methods are also used for handeling error in js 
// used to handle exceptions or errors that may occur within a block of code. It allows you to handle errors by providing a mechanism that catches and respond to errors, preventing the script from crashing
try{
  // if this block of code inside "try" didnt complete due to some error , this "catch" method will handle it
  // console.log(result);
  // this_doesnt_exist()
} catch (error) {  
 // error is the paramter representing the exception object(error messages displayed by runtime env) occured in "try" block , if u don't want it just remove it with it's surrounding parentheses 
  console.log("Error:", error); 
}finally{
  // console.log("this is finally block statement");  // it execute regardless of whether an exception was thrown or caught.
}



// Promise Methods

// Promuse.all()
// Creates a Promise from multiple Promises when all of the provided "Promises" inside argument gets resolved or rejected(when any "Promise" is rejected.)
const fetchData1 = new Promise((resolve,reject)=>{
      resolve("first promise is completed")
})
const fetchData2 = new Promise((resolve,reject)=>{
      resolve("second promise is completed")
})
const fetchData3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("first promise is completed")
  }, 1000);
})

function parallelExecution() {
  const result =  Promise.all([fetchData1,fetchData2,fetchData3]); // returns an "Promise" with response according to all "Promises" responses and containing their response value in an array
  result.then((data)=>{
    // console.log("ALl promisis completed with these return :",result) // All promises are resolved at this point
  })    
  result.catch(()=>{
   // console.log("One or more promises got rejected") // The resultent "Promise" is rejected because of the parameter "Promise" responses
  })    
}

parallelExecution();