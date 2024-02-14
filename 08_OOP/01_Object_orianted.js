// Object-Oriented Programming (OOP) 
// It is a programming paradigm(pattern) that organizes code into objects. Objects store data(properties) and the behavior(methods or functions) of the code,Allowing to write reusable code structure . In a Nutshell : "OOP" is a way of writting code taking Objects as fundamental building blocks
// In JavaScript, All Non-primitive data types are Objects
// the fact that the language is designed around a prototype-based model where everything, including primitive values can be treated as an object in certain situations
// everything that is not a primitive value is a type of object , they have different purpose : "Function" can be invoked(call) with arguments and "Array" are used to store values on basis of indexing , "Object" also used for storing value but in "key:value" form . 
// Primitive data types are not objects. However, they can use the properties and methods of their corresponding object ("Number", "String", "Boolean" etc. ) through a process called "autoboxing".
// Reminder : "Autoboxing" is a feature of JavaScript that automatically converts a primitive value to a temporary object wrapper when you try to access a property or method on them. but it do not change the original value or its type
// So that make js comparatively better language for doing "OOP" because everything is Objects in js , so don't think of Object literals when we talk about objects


// constructor function 
// A "constructor function" in JavaScript is a special term used for those function that are used for creating and initializing objects .When you call a "constructor function" using the "new" keyword, it creates a new object and sets the constructor function's properties (known as "prototype object") on that object. so as we know "new" keyword used to create instances(In the form of Objects) from any data type 
// All Datatypes have their own corresponding constructor function like. "Object()" , "Array()" , "Function()", "Number()" etc for creating an Object type, but due to Content Security Policy "Function() or "eval()" are ristricted from using in browsers and it's also recommended to use literals
// For creating Any Objects u need function (or "constructor function" for nerds) because :
// When u use "Object" literal ("{}") or any type of object literal syntax to creates an object . Javascript Behind the scenes implicitly uses the "Object" constructor or the Specific constructor to initialize it , that's why u have can access properties of the constructor 
// In a nut shell , All creation happen through "fncs" or "constructor fnc" , Whenever u create a new Object or instance from fnc, fnc will Inject it's inbuilt Property ("prototype object") into the newly created Object so his child can access all his property so on




// Prototypes in JavaScript: 
// Each object in JavaScript has an internal hidden property called "prototype attribute" (aka just "prototype")
// "prototype attribute" is a reference to it's parent from which it inherits prototype property ("prototype object")
// The "prototype property" is where an object store its properties and methods so any of it's instances can use it
// The "prototype property" also can have its own "prototype" (if it itself inherits property from another object), which have a reference to parent "prototype property"
// Whenever u try to access a property/method from an Object , JavaScript first tries to find the property/method directly inside the object then it try to find it inside it's "prototype property" if it doesnt find any , it try to find that property on it's "prototype" (i.e. it's parents "prototype property") , this loop runs until either it find the specific property/method or it find "prototype" as null (i.e. "Object.prototype.__proto__") , this process is called "prototype chaining"  
// This Process helps us to access property/methods that arent present in the Object but presend in the parent
// Like said earlier every Object get "prototype property" and "prototype"(reference) when it's created , u can add/remove and even append the whole "prototype object" from another
// In Javascript Every object inherit properties/methods from their constructor and because of Javascript dev. every object implicity inherits Object's "prototype property"(Like Main Property Provider) , so this conclude that every property in the "Object" constructor will be available to all Object 


// Using prototypes
// Acxessing prototype 
Object.getPrototypeOf(Object)  // returns the "prototype object" or the Function constructor of the parent , Depends whom the method applied on ( if used with objects it will return the fnc constructor and if used with "prototype object" it will return the "prototype object")
Object.__proto__   // It is equivalent to the Object.getPrototypeOf() but it should be avoided , removed from many browsers
Object.prototype  // it's the "prototype object"  of the object

// U can access any property/method of the object through it's "prototype object"

Object.prototype.isPrototypeOf   // u are accesing isPrototypeOf method (i.e. function) from Object constructor

// Adding Method into "Prototype Object" of Object constructor (Not recommended because of naming conflict , who cares)
Object.prototype.mycustom_method = function(value){
   // return console.log(`This is custom method that log whatever value u put in :  ${value}`)
}
// Testing newly created Method
Object.mycustom_method("Tested value")  // u don't have to access "prototype object" to use the project (i.e. Object.prototype.mycustom_method ) , u can direct access to the prototype properties on object



// Adding anothera Prototype method  (Note : use regular function for using "This keyword")
// As we know "this" means the enclosed Object in which the is present but in arrow fnc it mean Sorrounded scope
Array.prototype.custom_method = function(){ 
   let length = this.length    // "this" here means the object in which we call this fnc
   // console.log(`Your Array have ${length} Elements`);
}
let testing = [2,2,3,3,3,,3,3,3,3,3,3]
testing.custom_method()   // Because of prototype chaining , when we use "custom_method" on any array , it works like we are accessing property of the object(array in this case) itself so that make "this" keyword pointing to the array that we using property on.