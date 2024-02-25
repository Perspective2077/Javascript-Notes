// Import : used for importing the exported value
// NOTE : While linking this file in js , use type="module" attribute because It enables the use of modern JavaScript features , without using this attribute js treat it as a regular js which means it will use older syntax to allow Backward Compatibility 
// Also don't forgot to view Html file via localhost(live server) or browser wont allow import/export to take place because of (CORS)Cross-origin resource sharing policy

//  Types of Imports:


// 1. Named Imports 
//  Import specific values by there export name name.
// syntax 
//  import {} from "file-path"
//         ↑ Remember that all values are exported in a list form so don't forgot to use {} while access a named export
import { variable, variable1 } from "./01_Export.js"; // now u have access of these variable inside this file
// You can change the name of imported variables by using "as" keyword


// 2.Default Import:
// Import the default value from a module.
// syntax : import {randomname} from "file-path" 
// U don't have to use {} because default export doesn’t come in a "list" form like named exports do , so u doesn't need {} to access default export value
import myfunction  from "./01_Export.js";  // will print the deafult export value bc if u don't use {} u are specifying it that default value should be assigned to that variable



// 3.Namespace Import:
// Import all exports from a module as an object containing variables and there value
// Syntax: import * as name from 'file-path'


// 4. Side Effect Import:
// Import whole file/module ( The imported file will be executed here when this code run , Image it like u are calling a fnc , so other file will be a fnc that u are calling here).
// Syntax: import 'file-path'


// additional info about Imports/exports

// You even can change name of the imported named exported value by using "as" keyword after it
// import {fnc as name } from "./01_Export.js"

// Also u can export values without import values from a module 
export { default as DefaultExport , fnc } from "./01_Export.js";
// Also changed the name of the default export variable , u have to use {} to export default value and to change name of it

console.log(variable,variable1,myfunction,name) // all imported values will be hoisted so u can use there values anywhere
