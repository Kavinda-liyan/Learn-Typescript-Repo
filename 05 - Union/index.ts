//Union are used to declare type that can have one of several possible types

let userId:string|number;
//this mean userID can be string or either number
userId='CS122025';
console.log("UserID as String :",userId);
userId=1220251999;
console.log("userID as number :",userId);

type Employees={
    empName:string;
    empID:string|number;
    empIsMarried:boolean|string;
}

const Jhon:Employees={
    empName:"Jhon Doile",
    empID:"990891559V",
    empIsMarried:true,
}

const Macks:Employees={
    empName:"Mad Max",
    empID:2000895562,
    empIsMarried:"Devoced"
}
console.log("Jhon:",Jhon,"\n","Macks:",Macks);