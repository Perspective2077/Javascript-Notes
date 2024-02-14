// Data Catygory
// Heap Memory and stack memory 
// All the Primitive Data type those comes under stack memory i.e Which data type that get stacked by stacked(Imaginary concept) without chaning anything inside original data
// All the Non Primitive or we can say the Data we use by their refereence are comes under heap memory


// Primitive Data type 
// These are the basic data types in JavaScript that store a copy of the actual data. They include:
// 1. Strings , 2.Numbers , 3.Boolean , 4.Undefined , 5.null , 6.Symbol(introduced in ECMAScript 6) , 7.BigInt


// non-Primitive (Reference) Data type
// Non-primitive data types do not store the data itself, but rather the memory address of where the data is stored. This means that they are not directly holding the value of the variable, but a reference to it. They include:
// 1. Array , 2. Object , 3.Function
// All  Non-primitive data types are objects in JavaScript.
// Even though Primitive Data type can be converted in object type in JavaScript When needed but they are not objects itself


// Note : Because of Different memory allocations so two different two non-Primitive Data types can't be compared because there memory adress will always be different , because that's how they are compared(compared using there reference(memory allocation) ) when u do comparision , so don't compare non-Primitive Data type because it always will result in false