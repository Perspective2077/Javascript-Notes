// Variables and Constants

// Constant
const x = 12  
// Declaring a constant: the value of `x` can't be changed after this.
// You can't reassign (change value) or re-declare a constant
// Commonly used when you want to store fixed values (like config, limits, etc).


// Variables can be declared by two main keywords:

let y = 12  
// Declaring variable using `let`. The value can be changed later:
let newVar
newVar = 23


// You CANNOT re-declare a `let` variable in the same scope:
let y = 12  // ❌ Error: Identifier 'y' has already been declared

// JavaScript allows creating **scopes** (aka "bubbles") using curly brackets `{}`
// Each scope has its own set of variables. Inner scopes can access variables from outer scopes.
// So: You can't declare a `let` variable twice in the same bubble,
// but you can in different bubbles (blocks):

{
  let y = 12 // ✅ Valid — this `y` is different from the outer one
}


// You CAN reassign the value of a `let` variable
y = 11  // Value of `y` changed to 11



// Declaring with `var`
var z = 12  
// You can change the value:
z = 10 

var z = 11  
//  Re-declaration is allowed (not recommended — can lead to bugs)


// Declaring variable WITHOUT `let`, `const`, or `var` is allowed (but bad):
a = 1
// Works only in non-strict mode.
//  this is **bad practice** and should be avoided will learn later when learning about scopes more.


// SEMICOLONS in JavaScript:
// Semicolon `;` is used to separate statements.
// If you skip it, JavaScript will try to insert it automatically (ASI = Automatic Semicolon Insertion).
// It usually works fine, **unless** two statements are on the same line — then it may cause errors.

// JS also doesn't care about indentation or line breaks. Even weird formatting works:
let
average_code
=
21
// This is valid JS (but ugly). so why :)

// But: Sometimes, skipping semicolons + line breaks can create bugs. So it’s recommended to use `;`.

// Logging:
console.log(a, x, y, z, average_code)  // Simple log
console.table([a, x, y, z, average_code])  // Logs values as a table
