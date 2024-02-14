// Code Execution in Js
// Js is a single threaded language , which means it executing single operation or statement(instruction) at a time sequentialy
// Thread is set of instruction(single operation or statement) for a compiler to how to perform the execution of the code
// The code execution in javascript goes in 2 form
// 1. Global execution
// In both execution there are another two phase/part of the execution ,which are :
// Naming/creation... phase 
// In Naming/creation... phase all the variables are declared in global context(scope) with no values assigned to them (This process is also called "hoisting" )  i.e. undefined ,variables with "var" keyword become a standalone global property whereas without "var" keyword all variables become just an value
// Execution Phase 
// In executional phase all the variables(even "var" was undefined till now) are assisgned with their corresponding value if given 



// 2. Functional execution
// In function execution phase behave differently 
// 1. In naming phase instead of just declaring variable with value undefined , in fnc they assign function  value/property in naming phase only
// 2. Execution phase happen only when u call the fnc
// So whereever u call/run a fnc the execution is also sub divided into 2 parts 
// All the fnc execution happen in a temprory "stack" containtner (it's just conceptual model made for undestanding) this process we call it "call stack"
// First a fnc go in stack container then naming/creation.. and execution phase happen after both execution is done , the fnc will get out of this stack container(All the code will be vanished(removed from the memory) after completing execution of a function),if there is another function inside that fnc ,the remaining fnc comes inside the "stack" containtner one by one after their inner execution is done and after all functions are compiled they come out from "stack" container one by one i.e. Last In, First Out (LIFO) principle
//Examples (Disable word wrap (Alt + Z) in vs code to see visualisation of stack container working properly)

//1.

function fnc1(){}
function fnc2(){}
function fnc3(){}
fnc1()
fnc2()
fnc3()
// One by one fnc execution

//                       |                          |             |                          |                   |                          | 
//       function2       |                          |             |                          |                   |                          |    
//                       |                          |             |                          |                   |                          | 
//                       |                          |             |                          |                   |                          |     
//                       |                          |   ======>   |                          |         =====>    |                          |
//                       |                          |             |                          |                   |                          |     
//                       |                          |             |                          |                   |                          |
//                       |       function1          |             |       function2          |  function1        |       function3          |  function2
//                       |                          |             |                          |                   |                          |
//                       |__________________________|             |__________________________|                   |__________________________|
//                                   ↑
//                             stack container


// 2.

function function1(){
   function2()
}
function function2(){
    function3()
}
function function3(){
    function4()
}
function function4(){
}
function1()

// Last In, First Out (LIFO) principle  will be applied here, because of nested function


//                       |                          |             |                          |             |                          | 
//                       |                          |             |                          |             |                          | 
//       function2       |                          |             |       function4          |             |                          |      function2
//                       |                          |             |                          |             |                          | 
//       function3       |                          |             |       function3          |             |                          |      function3
//                       |                          |   ======>   |                          |   =====>    |                          |
//       function4       |                          |             |       function2          |             |                          |      function4
//                       |                          |             |                          |             |                          |
//                       |       function1          |             |       function1          |             |       function1          | 
//                       |                          |             |                          |             |                          |
//                       |__________________________|             |__________________________|             |__________________________|






