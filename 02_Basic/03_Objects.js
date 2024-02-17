// Objects
// They can be created using the Object() "constructor" or the object literal syntax.
// "Constructor" are known as Blueprints that can be used to make as many objects as you want With specific properties, so whenever we use constructor we actually  getting properties of that Object to make another object (Don't get confused , taking about objects that are inbuilt with properties) 


// Object literal
let object = {
    name: "perspective",
    class: 12
}

// Object Constructor (u can make "constructor" using "Object()" with "new" keyword and without it) 
let simple_object = Object()

let symbol = Symbol("key")  
let new_object = new Object({
    name: "perspective",
    "value of": 12,
    [symbol] : {
        first : "#*#",
        second : 911
    }
})

// All keys are stored in string form but u don't need to use ""/'' unless it's a special character or there is spaces in letters as key
// To store symbol as key u need to use "[]" brackets and for accesing symbol u also need "[]" brackets
// How to access object values (Object values are stored in "key:value" form so u can access them by using their key)
new_object.name  // acessing value using "." notation
new_object["value of"] // acessing value using [] brackets 
new_object[symbol] // acessing using [] brackets , it is usefull when u want to acess symbol or key that is not suitable to acess from "." notation i.e. key that contain spaces/special character  , Note : u need "" to access keys that are stored as strings(all keys are stored as strings in objects except symbol)
new_object[symbol]["second"]  // acessing nested values
// Note : Anything that takes an argument is a function, so whenever u use ex."array.method()" u are calling the function inside the array object (This is something u will learn in prototypes like array is not an object literals and still we are treating it as a object literals and acessing methods using "." or "[]" notation)  



// "this" keyword context(Value)

// The global object, if the function is called in the global scope or as a standalone function.
function context() {
  // console.log(this); // The global object
}
context(); // Call the function in the global scope


// The undefined value, if the function is called in strict mode 
// "use strict"; only work when used at the top
function context1() {
    // console.log(this); // undefined if called in strict mode 
}
context1(); // Call the function in strict mode


// The object that the function stored in
let context2 = {
  name: "Alice",
  greet: function () {
    // console.log(this); // context1 object
  },
};
context2.greet(); // Call the function 


// In an arrow function, the “this” keyword is not affected by strict mode, because it does not have its own “this” value. Arrow functions inherit the “this” value from their enclosing "lexical scope", which is the scope where they are defined. Therefore, the “this” value inside an arrow function depends on the “this” value of the surrounding code. ex. if an arrow function is defined in the global scope, the “this” value inside the arrow function will be the global object (known as window in browsers, exports in Node.js). Note : "Exports" object give an empty objects because of how is node  
const arrowFunction = () => { 
    // console.log(this) // The global object, depending on the environment ;
}; 
arrowFunction()




// Object Methods
// freeze (used to stop an object from adding anyother value inside it in future)
Object.freeze(new_object) // put your object inside ()
new_object["name"] = "your name" // will not effect new_object or will give error in strict mode

// assign (used to concat objects inside an another object)
let final_object = Object.assign({},new_object,object,context2) // it returns an modified object in which all other argument objects except first are combined inside first(target) object , similar keys values will be overridden by upcoming object in argument
// spread operator (U can also use spread operator if u want to disintegrate objects into a new object Note: same key values will be overridden)
let final_object1 = {...object,...context2}

// keys,values,entries/hasOwnProperty/toString
let keys = Object.keys(final_object1)      // returns an array containing all keys from the object
let values = Object.values(final_object1)  // returns an array containing all values from the object
let entries = Object.entries(new_object)  // returns an array containing all entries(key:value) from the object
final_object1.hasOwnProperty(`name`)      //check weather the key is present in the object or not
final_object.toString()                   //used to check type of object i.e "[Object Object]" (first is it's nature(object) and second is it's type(object) )



// Object Destructuring 

// it's syntax is same as creating object litreals i.e. "{}" but When you use the "{}" syntax on the left side of an assignment, it becomes a destructuring pattern. It allows you to extract values from an object and assign them to variables(variable will be key's name by deafault and if u want another variable name , use ":" with new variable after accesing the key).
// To destructure an object u just need an object with same keys as target object seperated by "," on lhs(left hand side) , and automatically all values will be assigned to there corresponding keys if exist or will be ignored

 let destructuring = { name : "johny" , age : 50 }

let { 
     name,     // name key value will be assigned to it if exist in target(rhs) object
    age:year  // extracted value and assigned it to new variable
 } = destructuring   

name // 'johny'
year // 50
age  //  Error : don't exist

// destructuring nested object is same but use ":{}" after accessing nested object (Note: there is no single syntax that can destructure a nested object and extract it's own value from the object ,u have to do manually)

let obj = {
 prop1: {  prop2:"value2" , prop3:"value3" }
}

let { 
 prop1,                    // extracted prop1 from the object
 prop1: { prop2, prop3 }, // destructured nested object inside prop1
 prop4 ='defaultValue'   // added a new variable with custom value
} = obj;


console.log(prop1,prop2,prop3,prop4)
prop1    //  Object
prop2    // 'value2'
prop3    // 'value3'
prop4    // 'defaultValue'

// Now these variables are in global scope because we destructured the object


// One use case of destructuring is in function 
function one({value}){   // now what is happening is when u call a function with parameter , it is assigned to argument variable (i.e. "{value}" ) . That's how destructuring is working here
    console.log(value)     
}

one({
    id : 1,
    value : "this is destructured value of 'value' key"
})  // called "one" function with object as an argument




// Future study : if u don't store an object it's treated as JSON i.e "{key: "value"}" , it's is treated as json unless n until u hold it inside a variable
