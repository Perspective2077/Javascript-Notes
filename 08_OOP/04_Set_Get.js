// Getter and Setter 
// In JavaScript, getters and setters are known as "accessor properties".They allow you to define custom behavior when getting or setting the value of an object property.
// Getters and setters look like regular properties but are actually functions mapped to a property. You use the "get" keyword before a method to define a getter and the "set" keyword to define a setter . Getter/setter have new ES6 shorthand syntax for methods in object literals so u don't have to use "function" keyword to define method



// Getter method: 
// The purpose of a getter method is to provide custom behavior when reading the value of a property
// When you access a property using the dot notation (ex. "object.property" ), JavaScript automatically invokes the corresponding getter method associated with that property name if exist

const student = {
    _firstName: 'Johnny', // We using "_" to letting other people know this property is private( Standerd way)

    get firstName() {
        return this._firstName.toUpperCase(); // getter method
    }
};
student.firstName // Acessing firstName will trigger the corresponding get method if there is a "get" method with that name

// Note : Do not access same property that u name the getter method , Because JavaScript automatically invoke getter method When u try to acess the property of same name as getter's, it will created infinite loop(calling getter method inside getter or infinite nested function) leading to exceeded call stack(Reminder : container where function executes ) size 



// Setter Methods:
// It allows you to execute custom code whenever an attempt is made to change the value of that property.
// Setters are most often used in conjunction with getters to create a type of "pseudo-property".
// The setter method takes one parameter, which represents the value being assigned to the property.

const student1 = {
    firstName: 'Johny', // data property
    set changeName(newName) {
        this.firstName = newName; // setter method
    }
};

student1.changeName = 'Silverhand'; // changing the value will trigger "set" with same name inside object to execute
student1.firstName  // Silverhand

// Setters allow you to customize how properties are assigned while chaning the value of property. They are useful for validation, logging, or any other custom behavior.




// Object.defineProperty():
// It allows you to define a new property directly on an object or modify an existing property on an object. Same as adding getters and setters but with more perks
// It returns the modified object.

// Syntax:
// Object.defineProperty(object, property, descriptor);
// object: The object on which to define or modify the property.
// property: Name of the property in string
// descriptor: an object that let you customize the details of the property


// It contain these methods :
// "configurable": whether property can be deleted or its descriptor (other attributes like writable and enumerable) can be modified.
// "enumerable": Determines whether the property can be iterated (loop will skip the value if it is "false").
// "value": The value u want to give to the property for accessing (original value won't be affected)
// "writable": Determines if the  property's value should be change or not in future.
// "get": A function serving as a getter for the specific property 
// "set": A function serving as a setter for the specific property 



// Example 
let test = {
    name: "johhny"
};

Object.defineProperty(test, "name", {
    // value: 30,        // value to want to assign to the property         
    configurable: true,  // No one can change attributes of the property in future, if its false
    enumerable: true,    // Shows up in loops
    // writable: true,   //  it will make the property read-only , if u passed false
    get : function(){ console.log("You are trying to access this property"); },    
    set : function(value) { console.log(`You are trying to change this property ${value}`); }  
    // Here you are using "function" keyword for defining getter/setter because you are defining a specific behavior for getting and setting the property, and the function keyword is expected as part of the syntax to define those functions because "Object.defineProperty() " is from ES5 where" shorthand syntax" for methods were not created
});
// test.name 
// U can re-declare discriptor of a property if it's configurable


// Note : here's the limitation: you cannot have both a value/writable attribute (for read-write access) and accessors (getters||setters) in the same property descriptor :
// because "value" attribute suggests that you want to initialize the property on the other hand, "get" suggests that you want to customize the value when the property is accessed. so the problem arrive that Should the property give the specified value(using "value"), or should it give the custom "get" value 
// And for "writable" attribute and "set" once again  , it becomes unclear whether the property should be modified using setter or whether it should be a simple writable property.
// So that's why JavaScript enforces that you can't have both a value/writable attribute and accessors (getters and/or setters) in the same property descriptor


// Object.defineProperty() very usefull if u want to customise/ristrict a specific property behaviour and u can use them in Objects and function/class constructor for future objects
// Like u can't really change value of Api's porperties 


// Object.getOwnPropertyDescriptor() 
// returns an object describing the configuration of a specific property that is presend on a given object 
// Syntax
// Object.getOwnPropertyDescriptor(object, property)  // 1. Object that u want the property of 2. property name (In strings)

// Example
const pi_descriptor = Object.getOwnPropertyDescriptor(Math,"PI")   
pi_descriptor // It have descriptor object of the "PI" property , u can see Math Api developers didnt want to allow people to change value of properties so they set all attributes to false


// U can also use "getOwnPropertyDescriptors()" to see all properties of an object including their corresponding descriptor
// Takes only one arguments that is a Object and It returns an Object of containing all properties and descriptors 
let Math_descriptor = Object.getOwnPropertyDescriptors(Math)
Math_descriptor // Contains all properties with it's descriptor





// Object.create() 
// Creating objects with prototype from another object , more like : It allows you to create a chain of objects with shared functionality
//  It provides a way to create objects that inherit prototype directly from another object(without the need for constructor function) , with ability to add properties with descriptors
// Takes 2 parameters , 1. object literal which should be the "prototype" of the newly-created object 2.(Optional) A object that include property with there corresponding "Descriptor" object 
let new_Object = Object.create(Object, {
    first : {
    value : "lucy",
    writable: true,
    enumerable: true,
    configurable: true
    },
    second : {
        value : "Myself :) "
    }
 })  // return a new object , using an existing object as the prototype of the newly created object and also properties (if added in argument)
 // If you want an Object with no prototype , just put null in the argument

// It allow more flexibility compared to constructor functions where the prototype is typically set once during object creation. In "Object.create()" if u edit "prototype property" of the parent , All children that created from it will automatically add those chances inside there prototype , even if they were created before editing "prototype property" 