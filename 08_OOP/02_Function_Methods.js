// Functions methods

// Call() : method allows you to call a function immediately and explicitly set the value of "this" keyword for that function , In a nut shell it used to give "this" value to the function with invoking it
// syntax
// function.call(thisArg, arg1, arg2, ...argN)   Arrguments 1. thisArg: The object("this") u want to give(context) 2. arg1, arg2, ...argN: Optional arguments to pass to the function.


// Example 
const person = {
    name: 'Johnny',
    greet: function() {
        // console.log(`I'm ${this.name}!`);
    },  
};

const anotherPerson = { name: 'Alice' };

person.greet.call(anotherPerson); // called the function and Changed the "this" context(value) of greet function ( before it was pointing to person object but now pointing to the object (anotherPerson) that used as argument in call method ) 
// By using "call(anotherPerson)" method , we temporarily (because we gave "this" value only for the one execution) set the context (this) inside greet() to be anotherPerson.


// Another example (if u seeing 3 dots under fnc , it mean it behaving like classes ,ignore (next topic))
const fnc_twice = function(year){
    this.year = year
}

const call_fnc = function(name,work,year){
    this.name = name
    this.work = work
    fnc_twice.call(this,year)   // instead of the object(because there is no object till creation), u gave the context("this") as an argument ("this" refers to the new created object by it), without "call()" method , the "fnc_twice" function's "this" context(value) was refering to the function itself not where it called (i.e. "fnc_fnc" function )
}

const call_result =  new call_fnc("johny","star",2077)  // created New Object

// Because of functions behaviour , it's "this" value refers to the sorrounding , where it creates not where it invoked , "call()" is usefull
 

// Apply() Method: It allows you to invoke a function and explicitly set the value of "this" keyword for that function 
// same as Call() but only difference is it only takes array or array like objects(node lists /HtML collection remember ?) as an argument 

// example
const apply = function(first,second,third,forth){    // Array values will be assigned to there corresponsding arguments
      this.first = first
      this.second = second
      this.third = third
      this.forth = forth
    }

const apply_fnc = function(array){
    apply.apply(this,array)  // used "apply()" method on the function
}
const apply_result = new apply_fnc([2,3,4,4,4])  // created instance




// Bind() Method: It creates a new function that, when invoked, has its this set to a provided value.
// Unlike call() and apply(), "bind()" does not call the function immediately , it returns a new function that can be called later.
// Arguments are same : 1. Object or context("this") that u want to attach to the returned funtion , 2. Then additional arguments u want to add seperated by coma

// example
const example = {
    name : "Johnny",
    getName: function () {
      return this.x;
    }
}
const stored = example.getName;
stored() // The function gets invoked at the global scope so it doesnt have "x" value result to returning "undefined"

const boundGetName = stored.bind(example); // returned a new function with attaching it's original scope with it, so whenever the fnc is called it can access values from it's original scope
  boundGetName()  // this will return "Johnny"