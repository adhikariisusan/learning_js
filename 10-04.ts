//introduction to typescript
const myName:string = "Susan";
const myNum:number =234.5;

const myArr=[1,2,3,4,"string"];
const myArr2: (number |string | boolean)[]=[1,2,3,4,5,true,"pratap"]; //explicitly declared in ts makes addition of other data types not possible

const myObj: {name: string, id:number} =
{
    name:"ram",
    id:123
}

//this can also be given as 

type Person  = {
    name:string;
    friend?:string; //here ? defines optional
    isMarried: boolean;
    gadgets: string[];
}

const ram: Person = {
    name:'Ram',
    isMarried:false,
    gadgets: ["mobile","laptop"],
}

type Vehicle = {
    engine: string;
    model: string;
    isManual: boolean;
    brand:string;
};

type Bikes  = {
    leguard: boolean;
    tyre: string;
}
// we can also do 
// type IOnlyAccept= Vehicle & Bike;
// let myBike: IOnlyAccept = {

let myBike: Vehicle & Bikes = {
    engine: "new",
    model: "hyundai",
    isManual: true,
    brand:"theprev",
    leguard: false,
    tyre: "MRF"
};

let test2: string = "Test";
let test3: number;
test3= test2 as any as number; //due to the console printing test as output weven though it is of number type, any should not be used 

//global, local and block scope 
// about temporal dead zones 

