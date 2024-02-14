// Dates
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


// U can Define Date with two types 1.by using Date() fnc 2. Using "new" keyword before Date() fnc

// Date Litreals
 let current = Date()

// Date Object/constructor
let current1 = new Date()



// Date Properties
let props  = Date(800)  // returns a string representation of the current date and time plus 800 milliseconds.
let props1 = new Date(800)  // creates a new Date object representing the date and time 800 milliseconds after the Unix Epoch.
// Even though both are correct but Date Object have many properties that u can use, but u can't do it with Date string because it just a string not a Object



current1.toLocaleString(); // Output: 28/12/2023, 12:50:21 am
// You can customize time/date using toLocalString() fnc  , u can change "Default" to "en-IN" or anyother locale if u want and second argument will take more specific thing u want to do with that object output

current1.toLocaleString('default',{
    month : "2-digit" ,
    weekday : "short"
})

current1.toLocaleDateString(); // Output: 28/12/2023

current1.toLocaleTimeString(); // Output: 12:50:21 am
current1.toLocaleTimeString(undefined, { hour12: false }) //  "{ hour12: false }" option ensures that the time is displayed in a 24-hour format without AM/PM. and u can use undefined ,standerd or leave the first argument these all result to same behaviour i.e Choose locale time

current1.getTime(); // to get time in milisecond from the given time and if u didnt added a value it will give milisecond after the Unix Epoch
Date.now(); // It is a static method directly called on the Date constructor. It returns the current timestamp in milliseconds 
 

current1.getFullYear(); // Output: 2023
current1.getMonth();    // Output: 11      Note: Months are zero-indexed, so January is 0, February is 1, and so on.
current1.getDate();     // Output: 27
current1.getHours();    // Output: 50
current1.getMinutes();  // Output: 21
current1.getSeconds();  // Output: 12




