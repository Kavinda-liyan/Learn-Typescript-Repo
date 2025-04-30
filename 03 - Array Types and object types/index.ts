//Arrays are type of object that can store multiple values of same type of data


const arr1:number[]=[10,10];
console.log(arr1);

let listNames:string[];
listNames=["Kavinda"];
listNames.push("Pasindu")
console.log(listNames);


//Objects
// const/let varName:{datatypes1;datattype2}={property:value,property2:value};

const person:{firstName:string; lastName:string; age:number}={
    firstName:"kavinda",
    lastName:"Liyanaarachchi",
    age:26
};

 console.log(person.lastName);