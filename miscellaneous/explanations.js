// # OBJECT .toString() Method RESULT EXPLANATION & AND HOW IT's DIFRRENT FROM OTHER DATATYPE's .toString() method

// back in the day .toString() was meant to tell the type of a value example For Array it will return
// "[object Array]"
// like that for every object it will specify the type of the value..
// and also the method can only be used on objects, so they hardcoded the word "object" and made the result in the format of "[object type]" 
// now after so many years toString is now work as String convertor.. because they modified the toString() constructor for every data types but the object's constructor remains same because :
// 1. backward compability
// 2. because they didnt knew what to do with the constructor like what should working of the constructor .. at that time when JSON wasnt a thing and even if they had converted simple object like 
{name:"ssd"} => '{name:"ssd"}'
// the more complex items like functions , nested objects , Circular references , symbol keys.. it will lead to infinite loop & broken constructor when going from string to object constructor 
// so for these reason they keep the original functionaly of the toString() to the object construction that is "[object type]" 


















































