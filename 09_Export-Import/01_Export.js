// The terms Export and Import are related to the module system , which allows you to organize code into separate files. The module system is part of the ECMAScript 6 (ES6) 
//Module system means nothing but files that are inter-connect and shared method/properties to make a bigger final file . These are just rich names Modules/files/components are just same thing
// To Distribute A bigger file into small tiny files for making project better readeable and customizable . javascript introduced two keywords  "Export" and "Import"
// As the name depicts , "Export" used for exporting data and "Import" used for importing that exported data , this process happens dynamic so if something changed in the exported value , update will be visible in the import file too


// Types of export  

// 1. Named exports
// Used to export a specific items (variables, functions, classes) from a module, you use the "export" keyword before  declaration of a data to export it
// By placing "export" before, you clearly indicate this value can be used by other files/modules also . but remember to put "export" before the declaration for doing "named exports"
export let variable = "Variable Exported first"
export function fnc(){
    console.log("This function going to be exported")
}

// You can also use the "export { variable, fnc }" syntax to export a list of variables that are declared anywere(u even can export a single item also using this syntax)
// Ex.
export { variable1 };
const variable1 = "Variable Exported second";

// Note that export {} does not export an empty object, it's exports nothing (but an empty name list).


// You can also rename already exports name (Both are acessable while importing)
export { fnc as myfunction };
// You can rename a name to something by using a string literal while exporting. 
// export { fncv  as "my function" };




// 2. Default Export
// Used to export the default export value from a module , When u import a variable from a file so If the imported variable name is not found in the file, the default value is used instead. 
const myDefault = 'Default Message'
export default myDefault   // At the time of importing variable from this file , if this file doesnt have a expected variable exported , this value will be used there
// u must have default export for preventing errors while importing
// You can have only one default export per file/module . Unlike named exports (where you can place "export" before the declaration), the export default statement must come after the declaration.

// The export default syntax allows any expression to be exported.(array literal , fnc expression)
// export default 1 + 1




// Now go to Import file to see how importing is working