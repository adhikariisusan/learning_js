//#private property 
class Student
{
    name;
    #roll;
    constructor(name,roll)
    {
        this.name=name;
        this.#roll=roll;
    }
    getroll()
    {
        return this.#roll;
    }
    #calculaterank()
    {
        return this.#roll * 21;
    }
    getRank()
    {
        return this.#calculaterank();
    }
   
}
const ram= new Student("ram",19);
const susan= new Student("Susan",19);
const yogesh=new Student("Yogesh",21);

console.log(ram.name);
console.log(ram.getroll());
console.log(susan.getroll());
console.log(yogesh.getroll());
console.log(susan.getRank());

class Bike
{
    nam;
    roll;
    makeyear;
    static brand="Yamaha";
    constructor(nam,roll,makeyear)
    {
        this.nam=nam;
        this.roll=roll;
        this.makeyear=makeyear;
    }
    #calculateprice()
    {
        return this.makeyear * this.roll;
    }
    getPrice()
    {
        return this.#calculateprice();
    }
    static createSingleTon()
    {
        return 1978;
    }

}

const bike1=new Bike("fzs",12,2019);
console.log(bike1.getPrice()); //esko ans kina undefined aayo?
console.log(Bike.createSingleTon());
console.log(Bike.brand);

class University 
{
    uni_name;
    
}

class Collegefirst extends University
{
    col_name;
}

const ncit= new Collegefirst();
console.log(ncit);

// Transpilers, Pollyfills, Common JS vs Es Modules, Introduction to es6