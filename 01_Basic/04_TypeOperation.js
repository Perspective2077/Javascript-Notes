// Note : Arthermetic operation exist in computer languages as maths i.e. + , - , / ,*(for multiply) ,**(for square) , %(for remainder)
// Type Operation



let string1 = "hello"
let string2 = "World"
let string3 = string1 + string2    //You can add Two string add just + sign 
// Output => helloWorld

let number = 23
let string_plus_number = number + string3
// Output => 23helloWorld

// ToPrimitive , u can choose Give prirority to a type in adding of type
// In javascript adding operation used with string will add everything that comes after string into string ,so Numbers arthermetic operation can take place if they are placed before a string

let added = (1+3+"Name")
// Output => 4Name

let added1 = ("Name"+1+3)
// Output => Name13



// Increments 
// There are two types of Increments i.e. Prefix and Postfix 
let prefix = 23
let finalnumber = ++prefix;
// finalnumber value is 24
// In this increment using prefix will return incremented value i.e +1 in the value 


let postfix = 23
let finalnumber1 = postfix++;
// finalnumber1 value is 23


// But in postfix it return original value and then increment the value i.e +1 after givng orignal value 