//Literal types allow you to specify a value that can only be one specific literal value

let color:"red"|"blue"|"green";
color="red";
console.log(color);
//if i set color as Yellow it will provide error 

//Tuple is type that represent an array with a fixed number of elements,where each element can have different type

let myArray:number[];//this is an array
let myTuple:[number,string,string,boolean];//This is tuple
myTuple=[1,"kavinda","kaviz",true];
myArray=[43,12,10]

console.log("This is Tuple:",myTuple);
console.log("This is number array:",myArray);
 