const person= {
    name:"Ram",
    job:"software developer",
    address:"Kathmandu",
    mobile:98229331,
    show: function ()
    {
        console.log(this.name + " works as a " + this.job);
        function nestedshow()
        {
            console.log(this.name + " works as a " + this.job);
            console.log(this);
        }
        nestedshow();
    }
}

person.show();