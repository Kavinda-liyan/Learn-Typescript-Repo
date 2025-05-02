class Persons {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

const Ajax=new Persons("Ajax Hill",123);
console.log(Ajax);


class Car{
    module:string;
    hoursePower:number|string;
    owner?:string;

    constructor(module:string,hoursePower:number|string,owner?:string){
        this.module=module;
        this.hoursePower=hoursePower;
        this.owner=owner;
    }
}
const NissanSunny=new Car("Sunny super saloon",1200);
console.log(NissanSunny);