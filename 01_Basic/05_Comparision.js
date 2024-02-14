// Comparision in js
// single "=" meant to be a assinging operator that will assing right hand value to left and "=="/"===" operators means comparing two values and returing a boolean value , either true or false that's it

// Type Comparision
//“Loosely equal” (==) means equality after type coercion.
//“Strictly equal” (===) means equality without type coercion. 

// String and Numbers
let compare_string = "12" == 12 // Output = true i.e Boolean value

// null and Numbers 
let compare_null = null > 0    //output = false
let compare_null1 = null == 0  //output = false
let compare_null2 = null >= 0 // output = true
// Because in Javascript equal operator and comparision operator works different , compare operator convert null into number but equal operator don't

// In programming "!" means "not" and also if u use "<" or ">" comparision operator or "!" operator u don't need follow "==" / "===" equals , just normal/single equal

// undefined and Numbers 
let compare_undefined = undefined >= 0  // Any comparison with undefined returns false, as undefined is not comparable to any number
// While null is loosely equal to undefined (so null == undefined is true),When comparing null and 0 using the == operator, JavaScript does not convert null to a number. Therefore, null == 0 returns false.


