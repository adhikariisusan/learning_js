//Implement a function generateFibonacci(n) that generates the first n Fibonacci numbers

function generateFibonacci(n)
{
    let a=0,b=1
    for(let i=0;i<n;i++)
    {
        console.log(a);
        console.log(b);
        a=a+b;
        b=b+a;
    }   
  
}

generateFibonacci(10);