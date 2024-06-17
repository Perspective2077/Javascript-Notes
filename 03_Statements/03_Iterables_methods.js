// Iteration (Loops) on Arrays
// Even though there are loops that can be used for doing many operations but for array there are more suitable methods for specific works , Why we about talking array ?? Because it is used to store multiple values although object also do the same but it is key operated, means it need a key to store and acess it's value and sometimes u need to store multiple data so for that object is not suitable


// Array Methods ("Methods" are essentially functions which are properties of objects or classes(blueprints for making custom Objects). so When u invoke a method on object (like "object.method()") , so it's technically like calling a fnc that is present inside an object , so whenever u put values inside the "methods" it's actually going inside the fnc that present in the Object , which is then doing the specific operations that . "Methods" are inbuilt that we all use and also u can make your own)
// Example : (this is how all js methods work)
const person = {
  property : "This Object have 2 keys",
    method: function(name) {
      // console.log("Hello, my name is " + name);
    }
  };
person.method("Lucy");    // Invoking method and whatever value u put in , it will give the specific result
person.property;    // Getting properties of the object ,so this what "properties" and "Methods" are mean , "Properties" used to acess info about the objects 
  

// Array methods :
let array = ["First value" , { key: "value" , name : "Usual"} , 1945 , 911 ]


// ForEach
// "forEach" used to loops over elements of array , you can give an function to ForEach method that going to run for each elements of array (Changes will be changed inside original Array)
// It can function with upto three arguments 1. elements of the array 2. Index of each value 3. Whole array
// syntax
array.forEach((item,index,array)=>{
    // Your code here 
    // console.log(`${index} : ${item} from (${array})`);
  
})
// Also u can declare fnc out side of Iteration menthods and use in it inside
function outside(item,index,array){
     // Your code here 
    // console.log(`${index} : ${item} from (${array})`);
}
array.forEach(outside) // u need to give the reference of that fnc only , not need to execute the fnc ,that work is of "forEach" method
//  "forEach" method is only usefull till u want to do something with each element of the array , this method isnt a call back method that will return u elements , so to do that there is another method "Filter"


// Filter
// It needs a "calbackfnc" with upto three arguments 1. elements of the array 2. Index of each value 3. Whole array
// "filter" Returns the only elements of an array that meet the condition specified in the "calbackfnc" 
// syntax
let filtered_values = array.filter( (item,index,array)=>{
    return  typeof item == "number"
})
// but "Filter" only return the satisfied value to overcome this u can use "Map" method



// Map
// It needs a "calbackfnc" with upto three arguments 1. elements of the array 2. Index of each value 3. Whole array
// "Map" use "calbackfnc" on each element of the array recursively (one by one) and return them as a new array
// syntax
let mapped_values = array.map((item,index,array)=>{
    return (`${item}`);
})



// Reduce
// It needs a "calbackfnc" with upto four arguments  1. accumulator  2. currentValue(item/element)  3. Index of each value  4.  Whole array 
// "Reduce" Call the specified "calbackfnc" for all the elements in an array. After each Iteration in the method the return value will be assigned to accumulator till all values are iterated
const sum = array.reduce( (accumulator, currentValue)=>{
    return ` ${accumulator} + ${currentValue} `
  }, 0 );
// value after "calbackfnc" is initial value of accumulator(if provided) or the first element of the array.

