// Strings, Denoted by " " and ' ' 
// U can Define string by Two Types


//1. string primitives or literals(it refers to the literal meaning of that keyword)
let first_String = "Hello"


//2. string objects
let second_String = new String("Hello world")
// "New" Keyword Used to Make objects 
// To see Properties of a type u can do ".__proto__" to see the properties it contains
// JavaScript automatically converts string primitives to String objects when necessary. This process is known as “autoboxing.
// So U can use All object proerties on string literals




// Methods of Strings

let Standerd = "  Hello World  "

//  toUpperCase()
Standerd.toUpperCase()  // Make All Letter Uppercase
//  Output : "  HELLO WORLD  "


//  toLowerCase()
Standerd.toLowerCase()  // Make All Letter Lowercase
//  Output : "  hello world  "


//  trim()
Standerd.trim() // To remove all starting and end spaces only from string
// Output : "Hello World"
Standerd.trimStart()  // To remove all starting spaces from string
// Output : "Hello World  "
Standerd.trimEnd()  // To remove all  end spaces from string
// Output : "  Hello World"


// charAt()
Standerd.charAt(2)   // To Find a character position by it's Index Number
// Output : "H"


//  indexOf()
Standerd.indexOf("H")  // To Find Index of a character , If output is -1 than it means the character doesn't exist in the string
// Output : 2


//  slice()
Standerd.slice(1,8)  // To Slice a string , It takes two arguments ,1. Where to start 2. Where to end , The end argument is exclusive so that doesn't include , if u don't enter second argument it will slice the string till end but first argument is must
// Output : " Hello "


//  indexOf()
Standerd.indexOf("H",0)  // To Find Index of a character ,It takes two arguments first of which character u want to find index of and second where to start the search(Optional), If output is -1 than it means the character doesn't exist in the string
// Output : 2


//  split()
Standerd.split('e')   // used to split a string into an array of substrings , it will split the string from where every your argument is at
// Output : ["  H","llo world  "]


//  repeat()
Standerd.repeat(2)  // used to repeat the value as many times as u give the argument
// Output : "  Hello world    Hello world  "

// includes()
Standerd.startsWith("l") // It check wheather the string starts with the passed character/word or not , result will be in bool and if nothing passed it always be true
// Output : false

// includes()
Standerd.includes("l") // It check wheather passed character/word is present in string or not 
// Output : false

// includes()
Standerd.endsWith("l") //  It check wheather the string ends with the passed character/word or not
// Output : true


/* A regular expression (regex or regexp) is not a method, but a special sequence of characters that forms a search pattern. This pattern can be used with certain JavaScript string methods like search(), match(), replace(), and others to perform more complex searches and manipulations.
 A regular expression is typically written as "/pattern/flags".
 
 1. pattern is the actual regular expression pattern you want to match (in simple words a "string" without ""/'').
 2.flags are optional and can include:

 g : for global search (find all matches rather than stopping after the first match)
 i : for case-insensitive search
 m : for multiline search (matches start of line and end of line characters) */


//  replace()
Standerd.replace("l","f")  // Used to replace character/words from a string , takes 2 arguments, 1. want to replace 2. replace with  , Only Replace the first character/words he finds
// Output : "  Feflo world  "
Standerd.replaceAll("l","f")  // same but it will replace all character/words in string
// Output : "  Feffo worfd  "
//  It might be worth noting that using a regular expression with the global flag (/pattern/g) achieves a similar result to replaceAll().


// match()
Standerd.match(/l/g) // used to find matches of the character/words in the string and return an array that contains all matches if u used "g" flag and also Without any flags, it returns an array where the first element is the matched substring, and additional elements provide information about the match.

// Output : ['l', 'l', 'l']


// search()
Standerd.search(/l/i) // used to find the index of the first occurrence of the character/words in the string 
// Output : 2



