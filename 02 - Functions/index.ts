//Functions Parameters Annotations


//Normal Functions
function addTwoNumbers(num1:number,num2:number){
    return num1+num2;
}
const result=addTwoNumbers(10,13);
console.log(result);

//Arrow Functions
const addNumb=(numb1:number,numb2:number)=>{
    return numb1+numb2;
}
const res=addNumb(1,3);
console.log(res) ;

//Void function
//void function do not return any value
function getName(name:string):void{
    console.log(`Hi I'm ${name}`);
}
getName('Kavinda');

const setName=(name:string):void=>{
       console.log(name) 
};