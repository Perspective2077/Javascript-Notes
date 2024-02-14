// If else statements 
// a method for running a block of code or control flow , while the condition is true
// control flow refer to a group of statements enclosed within curly braces {}



// Syntax

// If syntax (Check if condition is true , if that is the case then the block of code will run and it will not check other condition further)
let condition = false
if (condition) {
    console.log("run");
}
// Else If syntax  (if multiple statements u need to check)
else if (condition) {
    console.log("run nigger");
    console.log("u are not fast enough");
}
// Else syntax (if none of the above condition is true then this will only run)
else{
    console.log();
}
// An "if else" statement will continue examine the correct condition until it encounter an "else" statement or an "if" statement 
// If u used more than one "if" statement and all "if" will be different statements



// Blockless if statement
//  (just like if else statment but without block which mean u can't declared a variable and can only right multiples lines of statment using ",")
if(false) console.log("perspective") , console.log("hello"),
console.log("world")
// use only when to flex on nerds


// Ternary operator (when u want to run only one of two statements)
// use "?" after condition followed by true values then ":" followed by default/else value 
condition ? "trueValue" : "falseValue";
// This will return a value according to condition


// Nullish Coalescing Operator (??)
// Syntax
let result = condition ?? "alternate value" ?? "second alternate value";
// Used for assigning backup values. If the first value doesn't exist (i.e. undefined or null), it will skip to the next value. If it finds a non-nullish value, it will skip subsequent(all afterward) values


// Short-circuit if statement ( when you want to execute a statement only if a certain condition is true)
condition && console.log("vivek")


//  Switch statements 
// Syntax
let key = "black"
switch (key) {
    case "nigger":
         // code here
        break;
    case "nigga":
        // code here
        break;

    default:
         // code here
        break;
}
// key is the value u want the condition to run, values after "case" is the value to want to compare with key, u have to use break keyword to break the loop to stop printing every statements after that 
// switch statements goes like this :
// compare key and the value (i.e value for case keyword)
// if it found an equal value it will leave checking any further and all statements(code) after that comparision will be executed one by one(even the another case statements except deault statement), to stop this we use "break" keyword 
// and if it doesnt found any equal value ,it will print default value


