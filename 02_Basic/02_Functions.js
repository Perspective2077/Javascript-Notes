// Functions :
//  As we know it's is a special kind of object that takes parameter and return a value and can be called by "()" , used to store block of code that u can re-use anytime

// Creating a fnc litreals
// 1. regular fnc (u have to use 'function' keyword followed by function name of the function then "(){}" , this is called function declaration) 
function regular_fnc(){}
// 2.Anonymous function : function that are stored in a variable (The stored value is known as function expression )
let regular_fnc1 = function(){}
// 3. Arrow fnc (it works better than regular fnc for short code or rediability)
// syntax
let arrow_fnc = () => {}
// 4.Immediately invoked function (IIFE) , means executed exactly after time of creation
// syntax "(function)()"
(function IIFE(){})()




// Creating a fnc constructor 
// if u create an fnc constructor it will give u an empty object unless u put your own property to that fnc
// Although "this" context(value) is "global object" inside fnc but we are creating instance(object) of that fnc so it will make an object with "This.name/class" as it's keys 
let fnc_constructor = new function(classes){
    this.name = "value"
    this.class = classes
}


// calling/running a fnc
// To run a fnc u just need "()" after that fnc name (or the variable u stored the fnc in) to run/call it without "()" it will just give the reference of that fnc , will not call/run it
regular_fnc()
//after calling/run a fnc all the lines of code inside fnc will be excuted line by line Where it is called(not where it is defined) With whole "lexical scope"(fancy way of saying outer scope or outer variable value) attached to it . Which mean properties that are available to the function at the time of creation will be availabe at the time of calling also 
// After function body code execute , it returns a value (if u have one) , "return" is the end of fnc excution after return value fnc will not execute the code further  
// In "IIFE" u don't need to call the function bc it already called/run/executed at the time of creation




// Return value ( Except "IIFE" all fnc have return value(optional)) , it's only used inside fnc , and it's kinda fullstop for code execution

//  Syntax (For executing all the afterward code we need to comment "return" keyword ,feel free to uncomment it)
function return1(){
return "return values"
}
// for more than one line of return value u can use "," and for rediability u can enclose it by "()"
function return2(){
 return(
    "return values",
    88
)
}

// if a function doesn't explicitly have a return statement, it implicitly returns undefined
// In arrow fnc if u don't use "{}" , it will implicitly return that one line of statement (Note : arrow fnc without "{}"  is only used for returning one statement)
let implicitly_return = () => "implicitly returned value"

// Without return values fncs are called void fnc in other languages , but in js void is used for ignore return value
function doSomething() {}  // void fnc in other languages 
void implicitly_return();   // Using void to execute a function and ignore its return value i.e undefined




// Closure :
// Normally, when a function finishes executing, its local variables are deallocated(deleted), and they become inaccessible. Means if a function done it's execution all code inside it will be vanished(removed from memory) . However, closures change this behavior.
// The inner function can still access to variables from its lexical scope, even after the outer function has completed its execution and there is no variables available

function outer() {
    let x = 10;
    function inner() {
    //   console.log(x);
    }
    return inner; // returning the inner function
}

let closureFunction = outer(); // returns "inner" function and "closerFunction" is holding the function now
closureFunction(); // calling closeFuntion() which is holding inner() function 
// Returns : 10 , Event though the variables inside outerfunction is deleted after complete execution of it . 
// So "closure" attach outer function variable(values) to it's nested function so even after completing the executing of the function, it's scope will be availabe to all the childrens permanently

  

// Parameters/arguments 
// U can give some specific values to fnc in creation or executing phase, so it can only be use by it directly without exploiting values to variables, In a Nutshell for "clean code"
// declaring variables/values in creating phase are called "parameters" (u can also declare and assign at the same time)
function fnc(first,second,third = "world"){
    console.log(first,second,third);
}
// assigning variables/values in execution phase are called "arguments"
// fnc("hello",69)

// In a nutshell u can say parameters are variables and values are agruments , all the values will be assigned to the variables correspondingly (already assigned variable will be overridden by arguments in executing phase)
// For assigning more than one value to same parameter(variable) in a fnc , u can operator "..." before the parameter and it will gasp(eat) all overflowed values
// U can pass any type of values as arguments i.e array,string,object and even an another function known as A callback(function passed as an argument to another function to handle the completion of operation ,it's often used with async operations )
function object_parameters(value = {1:value,2:variable}){
    console.log(value);
}
// object_parameters({1:"perspective",2:"name"})
// "value" value is overrridden at the time of execution


