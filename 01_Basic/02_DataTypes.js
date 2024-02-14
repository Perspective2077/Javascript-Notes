// DataTypes

// To see datatype of any thing u can use "typeof" keyword or "typeof()"
typeof 12
typeof(12)

// 1 data-type => Numbers
let number = 12;
// Numbers in JavaScript are stored as 64-bit floating-point numbers that means it can store 2^53 - 1 numbers only
// for more info about 65-bit or how it works  go here ("https://datacadamia.com/data/type/number/computer/float64")
// Number have a range of 2^53 so to solve this problem There is "BigInt" that can store large numbers of values
let bigInt = 87654321n; // BigInt
let bigInt1 = BigInt("12345678"); //This will convert the inside value to "BigInt"

// 2 data-type => Strings
let string = "this is string";
// JavaScript strings are immutable(non changeable).

// 3 data-type => Boolean
let boolean = typeof true;
// It contains two values "true" or "false"

// 4 data-type => Undefined
let Undefined = typeof undefined;
// A variable is 'undefined' only if either is assign with "undefined"  or it has been declared but no value has been assigned to it.

// 5 data-type => Null
let nullVar = typeof null;
// For objects, the type tag was represented in binary as 0b000. However, due to an oversight, null was also tagged with the same type identifier, leading to both objects and null being identified with the same type tag
// As a result, when the typeof operator was introduced to check the type of a value, it ended up reporting null as "object." This behavior was considered a mistake, but it has been preserved to avoid breaking existing code that may depend on this quirk.

// 6 data-type => Symbol
let symbol =  typeof Symbol("id");
// Symbol is often used to store unqiue values
let id1 = Symbol("id");
let id2 =  Symbol("id");
// Symbols are unique and immutable data types that may be used as identifiers for object properties.
let truth = id1 === id2; //Output : false  , it's comparing symbol("id") to symbol ("id") which is not equal
let truth1 = id1.description === id2.description; //Output : True because it's getting the value of symbol 

// 7 data-type => Object
let object = typeof { name: "Perspective", class: 12 };
// Objects in JavaScript can be thought of as a building block , it used for store values in "Key:form".
// Everything in js is an Object , but they have different purpose
// Althought The "typeof" returns "specified type" when applied to Non-primitive data type because to distinguish it from other Object data type
// and Also u will see [Object type] value sometimes  


// 8 data-type => Array
let array = typeof [1,2,3,4,"array"];
// Arrays in JavaScript are a type of object used for storing multiple values in a single variable.

// 9 data-type => Function
typeof function name() {
    return;
}
// Functions in JavaScript are Different type of objects that can be invoked(run) whenever we want