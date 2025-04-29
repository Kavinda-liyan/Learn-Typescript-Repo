//Annotations

//let variableName:dataType //we can assign value statically
//or we can assign value dynamically 

let firstName:string="Chamara";

let myName:string;
myName='Kavinda';

let age:number;
age=26;
console.log(firstName," ",myName," ",age);

// ---------------------------------------------

//Type inference
//allows the compiler to automatically determine the type of a variable based on it's value
//Declare Variable without datatype

let Age=40;
//but  not like js we can't assign different datatype after we assigned 
//let Age=true => ERROR!

// ---------------------------------------------

//Any
//any will disable the power of checking type of variable
let count:any=20;
count='Hello';
//so we can re assign different type of value to our variable.




