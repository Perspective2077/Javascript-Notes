// Do-While Loops
// Used to execute a block of code continuosly(loop) while a specific condition is true ,it will execute the statement at once even if the condition is initially false.


// Syntax
let condition = false
do {
    // Code
    // console.log("at least one time this statement will be printed/logged");

} 
while (condition);
// Note : this is a loop so u need to break the loop by making condition false after a certain times (times u want to print the statement again n again)



// While-loops
// While a condition is true , execute a block of code again n again
while (condition) {
    console.log("hello wokkie pokkie");
}

// For-loops
// Syntax
// It take 3 arguments ,1.Declaring(if the value is already declared , then "let/const/var" keyword will be ignored) and assigning value , 2. condition for running loop , 3. changing assigned value each time loop runs, so we can stop the loop after a certain point
for (let index = 11; index <= 10 ; index++) {
    //code    
    console.log(`This loop counting : ${index}`);
}


// Break and Continue keyword
// Used inside control flows(loops) to break the loop and to skip the code 
for (let index = 11; index <= 10 ; index++)  {
    console.log("hello wokkie pokkie");
    break // it will break the loop , no further looping
    console.log("This statement will never be printed");
}

for (let index = 11; index <= 10 ; index++) {
    console.log("hello wokkie pokkie");
    continue // it will skip the code that comes after it ,also u can say "it goes to the next iteration of the loop."
    console.log("This statement will never be printed");
}



// "For-of" Loops
// Used to iterator(loop) over String/Array , can't itrerate over object ,to fix that is there is another loop "For-in"
// syntax 

let string = "string/array" 
let object = {key : "value" , name : "your name" , brain : "dead" }
let Array  = ["heil" , 1945 , "painter"]

for (const iterator of string) {
    // Code for each index/element
    // console.log(iterator);
}

// "For-in" Loops
// Used to iterator(loop) over String/Array/Objects , it works different form "For-of" loops ,it will loop over "number of indexs" for String/Array and loop over keys for objects
// syntax 

for (const iterator in object) {
    // Code for each index/keys
    // console.log(iterator);
}


