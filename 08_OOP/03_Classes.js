// Classes 
// Known as Blueprints/templates for creating objects. But wait ,Funtions also used to create objects ??
// Yup it is and the only way to create instances aka Objects , "Classes" are just syntactic sugar(easy syntax) for creating more structured objects , Behind the scene there is a function who are creating instances , In other languages there are concepts of classes and because of that , Js devlopers created "Classes" (In ES6) for new devlopers so they can connect things up


// Sometimes u could see people saying :
// class expression : storing class in a variable and it is executed in strict mode
// class declaration : declaring class name inside the syntax, so u can't re-declare class with same name but u can in expression because it is a variable and variables value can be changed
// Nothing crazy , just idiots admiring complicity 


// Syntax
// "class" keyword followed by "name" and "{}" , inside "{}" u must have a "constructor"
// "constructor" Whenever u call a class or making instances from class ,  u are directly going in constructor so this is main body and also all parameters going here 
// Imagine "class" as a wrapper that holds a function(constructor) and prototype(every method properties/methods u define inside function become "prototype" for childrens), u don't need to add properties inside prototype of class , "class" will do everything for you 


class Name{       
  constructor(name,age,year){  
    this.name = name,
    this.age = age,
    this.year = year
  }

  // Properties (Instance Variables) : property direclty diclared inside class
  // It becomes an instance property that only availabe to instances ,This means that each instance of the class will have its own copy of that property inside them that u can modify if u want, and you cannot directly access it through the class itself. Instead u can access through the instances ex. "instance.property" 
  property = "this is a property of a class" ;
  // If u add "Static" keyword before property , It will be converted into "static property" and will only be accessed directly through the classes not by instances (i.e. "Name.property")
  // try adding "static" keyword before variable and see the result . Also variable can hold any value so u can even store a "function" to those properties 


  // Methods : Classes have new ES6 shorthand syntax for methods in object literals , allows you to define methods without using the function keyword explicitly.
  // u can define method same as u do in function but here u don't need to explicitly add "function" keyword . These methods can be access by every instances but they are not seperatly present inside them
   method(){                            
      console.log(`This method is just printing value of name : ${this.name}`);
  } 

}

let object = new Name("johhny", 50, 2077)  // created a object from "class" expression


// Extending Classes
// U can extend a class using "extend" keyword 
// syntax
// Syntax goes in this order 1. Class keyword 2. new class name 3. extends keyword  4.class u want to extend
class New_Class extends Name{
    constructor(name,second_name,age,year){
        super(name,age,year)   // The "super()" method used to call parent class constructor with "this" value incoded . As we know "this" value of parent constructor will point to the object where it is declared not where it is called so that's where super() method comes , same like "call()" in function but now u dont have to explicitly give "this" value 
        this.second_name = second_name
    }
}

let new_object = new New_Class("johnny","silverhand",50,2077)

// Although if u need something like prototype in classes intances, u can still edit prototype of classes by doing "class_name.prototype" , Remember that In the end "Class" is also a "Function" not a different data type of enitity, it's just a wrapper around function with perks