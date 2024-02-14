// Math : An api used by js to do some maths 


// You can define a Number in two ways: 1. By directly assigning values 2. Using the "new" Keyword
// Number literal (primitive number)
let num = 69.6969;

// Number object (created using the "new" keyword)
let numObj = new Number(42);





// Methods of Numbers
// toPrecision()
let precision = num.toPrecision(3); // It is used to convert a number to a string with a Precised value 
// Output: "69.7"

// toFixed()
let fixed = num.toFixed(3);  // It is used to format a number To a given decimal places with Precised Value.
// Output: "69.697"

// Currency
let money = 1000000
let Currency = money.toLocaleString('en-IN')  // Localstring used to format numbers, dates, and times  accodring to custom region
// Output : now result will be using according to the Indian English locale i.e 10,00,000


// Maths
/* The "Math" namespace object contains static properties and methods for mathematical constants and functions.
   Math works with the Number type Only. It doesn't work with BigInt.
   U can use "Math" Properties/Methods by Using "Math." keyword   */




// Maths Static properties
let pi = Math.PI // Output : 3.141592653589793
let logebase2 =  Math.LOG2E // Output : 1.4426950408889634
// for more values of constant go => ("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math")




// Maths Static methods
// Absolute value
Math.abs(num) //Returns the absolute value of x i.e distance from 0.

// Round Number
Math.round(num) //Returns the value of the number x rounded to the nearest integer.
Math.ceil(num) //it rounds down to the nearest integer that is greater than or equal to the input
Math.floor(num) // it rounds down to the nearest integer that is less than or equal to the input

// min/max  (It is used to find min/max value in multiple values)
Math.min(num) // Returns the least value it found in the given array or values
Math.max(num) // Returns the max value it found in the given array or values

// random
Math.random()  // It give a random value from 0 (inclusive) and 1 (exclusive).


