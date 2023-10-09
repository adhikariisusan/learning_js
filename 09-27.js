/*
    making functions in javascript 
    syntax: function functionName () {   here the code will be written }
    arrow function 
    syntax: const functionName = () => { }
*/
function print()
{
    console.log("Printed");
}

const print2 = () => {
    console.log("Printed");
}

function add(a,b)
{
    console.log(a+b);
}

print2();

add(9,4);

//OOP in JS was introduced in ES6

class Student
{
    name;
    roll;
    address;
    constructor(name,roll,address)
    {
        this.name=name;
        this.address=address;
        this.roll=roll;
    }
}

ram = new Student("Ram",19,"Koteshwor");
console.log(ram.name );


