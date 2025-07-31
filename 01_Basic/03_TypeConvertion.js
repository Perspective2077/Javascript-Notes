// Type Convertion :

// Converting Into Numbers
// To Covert Any value to number u can use "Number()" fnc 
let string = "String"   
let Converted = Number(string)        //String to Number , non-numeric string will be converted to "NaN"( Not a Number , NaN is still a number datatype) and if the string is empty (i.e. "") ,it will return 0

let boolean = true  
let Converted1 = Number(boolean)     //Boolean to Number lead to Either 1 for true or 0 for false 

let Undefined = undefined 
let Converted2 = Number(Undefined)   //Undefined to Number , For undefined, as well as for objects and arrays, it returns "NaN".

let Null = null
let Converted3 = Number(Null)        //null to Number will give 0 as Null means nothing

// Fun fact : U can convert Anything into numbers by just puttin "+" before it
let converting_into_Number = +"hello" 
let converting_into_Number1 = +true 

//  console.table([Converted,Converted1,Converted2,Converted3])
//  console.table([typeof Converted,typeof Converted1,typeof Converted2,typeof Converted3])


// Converting Into String
// To Covert Any value to String u can use "String()" or ".tostring()" fnc  
let number = 69  
let Converted4 = String(number)       // number to string, will convert number into string datatype. including bigInt,float,NaN .. DUH

//Boolean,null,Undefined to String ( All will convert their value to string i.e. "Undefined","null","true/false")

let array = [1,2,3,"string"]
let Converted5 = String(array)        //Arrayto String , All the values inside array will be converted and written in a single string 

let object = {name:"vna",class:12}
let Converted6 = String(object)       //Objects to String will give u "[object Object]" in which the first object is hardcoded word representing on which the property can be used and the second Object represent the datatype that is also an Object here.
// question why?..
// simple answer : it's is from the starting of the language and call it a developer choice
// whole answer : ../miscellaneous/explanations.js 

// console.table([Converted4,Converted5,Converted6])
// console.table([typeof Converted4,typeof Converted5,typeof Converted6])


// Converting Into Boolean
// To Convert Any value to Boolean, you can use the "Boolean()" function 
let number1 = 0
let Converted7 = Boolean(number1)       //Number to Boolean, 0 will be false, any other number will be true same goes for string 
// empty string("") ,0,Bigint 0n,NaN,undefined,null are falsy(false) value when converted into bool while empty array,object,function are truthy(true) value
