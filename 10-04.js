// concept of the temporal dead zones
// js is a prototype based language and not 

function Vechicle(name,brand)
{
    this.name=name;
    this.brand=brand;
}

Vechicle.prototype.dispValues = function () {
   console.log("Bike is: "+name+" of brand " + brand)
}

function Bike(name,brand,gears)
{
    Vechicle.call;;(this,name,brand);
    this.gears=gears;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;



//object.create is used here in function prototyping in js 

//asynchronous timer functions: such as timeout and interval, also it has AJAX (asynchronous Javascript and XML) and Promises and Async/Await 


const handler = () => {
    console.log("I am handler")
}

