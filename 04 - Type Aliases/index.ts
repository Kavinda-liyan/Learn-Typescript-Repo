//Way to create new name for an existing type
// ----------------Type----------------
//type varName={name:string;age:number;}
type person={
    name:string;
    age:number;
};

const Person1:person={
    name:'Kavinda',
    age:16,
};
console.log(`Hello I'm ${Person1.name}. I'm ${Person1.age} years old`);


// ----------------Optional in type----------------

//we can make certain property "optional" in an object type by adding question mark (?)
type Student={
    firstName:string;
    lastName:string;
    age:number;
    email?:string;
}

const nimal:Student={ 
    firstName:'Nimal',
    lastName:'Siripala',
    age:80,
    email:'Nimalsleep@gmail.com'
}

const mahinda:Student={
    firstName:'Mahinda',
    lastName:'Rajapaksha',
    age:76
}
console.log("Mahinda :",mahinda,"\n","Nimal :",nimal );

// ----------------Readonly in type----------------

//we can make certain property "Read only" in an Object type by adding "readonly"

type Teacher={
    employeeID:string;
    name:string;
    age:number;
    readonly NIC:string;
}

const Namal:Teacher={
    employeeID:'99089HG',
    name:'Namal Rajapaksha',
    age:36,
    NIC:'990891559V'
}
console.log("NAMAL :",Namal); //we cannot change value of NIC 

// ----------------Intersection in Type----------------

//intersection type is the way to combine multiple types into single type by using '&' symbol

type Person={
    name:string;
    age:number
}
type Employee={
    employeeType:string;
    employeeSalary:number;
}

type Engineer=Person&Employee;

const Sirisena:Engineer={
    name:'Nimal Sirisena',
    age:46,
    employeeType:'Civil Engineer',
    employeeSalary:130000
}

console.log(Sirisena);

// ----------------Intersection in Type----------------


