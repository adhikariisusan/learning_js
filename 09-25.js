
//this is for array
let a=[1,2,3,4,5];
for( let i=0;i<a.length;i++)
{
    console.log(a[i])
}

//object operates in the key value 
let b= {
    name:"susan",
    location:"pepsicola"
}
//printing the value of the object using key value 
console.log(b.name);

//stack data LIFO principle 
// set doesnot maintain order and put elements arbitaryly
//array stores simulataneoursly maintain order 
//map puts unique key element to access the data 
class stack{
    constructor()
    {
        this.list= [];
    }
    push(data)
    {
        return this.list.push(data);
    }
    pop()
    {
        return this.list.pop();
    }
    peek()
    {
        return this.list[this.list.length -1];
    }
    print()
    {
        console.log(this.list);
    }
}
let myStack= new stack;
myStack.push("Ravi");
myStack.push(3);
myStack.pop();
myStack.peek();
myStack.print();

