//destructuring assignment, default parameters, spread operator 
//rest parameters and classes and inheritance 
//promises, async/wait modules(import/export)

//default parameters are the predifined values in the functional parameter unless any value is explicitly passed
function Name(name="Xman")
{
    console.log(name);
}
Name("susan");
Name(null);
Name(undefined);
Name();

//destructing assignments miss bhayo tyo ekchoti belka hernuparne cha

function addNums(...args) {
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args.length[i];
    }

    console.log(sum);
}
//variadic functions

//promises in javacript , what is asynchronous ???? async and await bhaneko k ho 

//code demonstration for promise 
let myPromise=new Promise((res,rej) => 
{
    console.log("1: ",res);
    console.log("2: ",rej);
    res("The Resolver"); //resolve ko then ma jancha 
    //rej("You are rejected");
}); //here res means resolve and rej means reject and they are functions cauuse the output remains function {anonymous}
// console.log("3: ",myPromise);

//concept of then catch and finnaly 
// myPromise
// .then((value ) => {
//     console.log("the value of then ",value);
// })
// .catch((value ) => {
//     console.log("the value of catch ",value);
// })
// .finally(() => {
//     console.log("And then finnaly");
// })
//euta promise bata arko promise return garnu siknu 

//euta function agadi async keyword halne bittikai promise huncha function type 
//code in line 41 to 50 cna be written like this 
async function someAsync()
{
    try{
        let val = await myPromise;
        console.log(val);
    }
    catch(err)
    {
        console.log(err);
    }
    finally 
    {
        console.log("Finally");
    }
}

//import export and modules in js, modules basically means files in js

//default export and named export, default huda kheri euta matra export garna paine ho ki k ho?

//also see callback, pratap sir ko article herda huncha, and you can explore