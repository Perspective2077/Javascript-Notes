// Arrays

// U can define array by two types , 1. using square brackets "[]" 2. using new keyword i.e "new Array()" Note:(u don't need to use [] inside array fnc) 


// Array litreals
 let array = [69,"Hitler","Uniball",true,1945]

// Array Objects
let array1 = new Array(69,"Hitler","Uniball",true,1945)


// Although u even can store arrays values in corresponding arrays variables (Aka Array Destructuring )
let [first,second,third] = ["first value","second value","third value"]
// console.log(first)  // first value
// console.log(second)  // second value


//Array methods


// Length/join/at/reverse/spread
array.length // Give the length of array
// Output :  5
array.join() // it will return a string with all the element joined together with the given argument (if none is given , default argument is coma)
// Output : "69,Hitler,Uniball,true,1945"
array.at(3) // will give the element at index given in agrument , u can also acces element in array by using "[]" after an array and telling the index inside []
// Output : true
array.reverse() // Reverse the order of elements in the given array
// Output: [1945, true, 'Uniball', 'Hitler', 69, 'added']
let spreaded_array = [...array,...array1] // spread operator can be used to disintegrate arrays 


// push/pop
array.push("element") // Add the given value to last Index in the array
// Output :  [69, 'Hitler', 'Uniball', true, 1945, 'element']
array.pop() // Remove last element in the array
// Output :  [69, 'Hitler', 'Uniball', true, 1945]



// unshift/shift
array.unshift("element") // Add the given value to first Index in the array
// Output :  ["element",69, 'Hitler', 'Uniball', true, 1945, 'element']
array.shift() // Remove first element in the array
// Output :  [69, 'Hitler', 'Uniball', true, 1945]



// slice/splice/concate/flat
array.slice(1,4) // it returns a new array of element that comes under the range of arguments  i.e index 1(inclusive) to 4(exclusive) , it doesnt change original array
// Output :  ['Hitler', 'Uniball', true]
array.splice(1,4,"added") // returns a new array after taking out the given range of element from original array ,1. first argument is from where to start 2. Number of elements u want to remove from starting element 3. after two arguments all the other agrument will be new values that u want to add in the orginal array in exchange of removed elements, i.e. splice(start, deleteCount, item1, item2,...,itemN)  , Note: toSpliced() works same as splice() but it returns a new array instead of modifying the original array 
// Output :  [69, 'Hitler', 'Uniball', true, 1945]
let new_array = array.concat(array1,[2,3,["hi",["world",2024]]]) // it returns a new array that includes all the element in the arguments followed by their order in fnc , u can add multiple arguments ,concat will spread the elements of array given in arguments so u don't need to worry about [] unless u have nested array
// Output : [69, 'added', 69, 'Hitler', 'Uniball', true, 1945, 2, 3, ["hi",["world",2024]]]
new_array.flat(Infinity) // It returns a new array with all sub-array elements concatenated into it recursively(one by one) up to the specified depth(number).
// Output : [69, 'added', 69, 'Hitler', 'Uniball', true, 1945, 2, 3, 'hi', 'world', 2024]



// from/isArray/of
Array.from("hello",x=>x+x,)  // It is used to create a new Array instance from an iterable(things that can be looped) or array-like object , it takes 3 argument 1.  iterable or array-like structures that u want to convert into array 2 .map fnc(Optional) that will call on every element of the array. 3.thisArg(Optional) Values to use inside mapFn.
// Output : ['hh', 'ee', 'll', 'll', 'oo']
Array.isArray(new_array) // it tells wheather given values is an array or not
// Output : true
Array.of("hello",2023) // returns a array with set of elements that are given in argument  , Note : Array.of() and Array() do same thing but Array(7) will create an empty array with 7 length and Array.of(7) will create an array contain 7 i.e [7]
// Output : ['hello',2023]




// For more methods : 
// import "../03_medium/03_Iterables_methods"
