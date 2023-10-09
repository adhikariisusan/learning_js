//Implement a function calculateFactorial(n) that calculates the factorial of a non-negative integer n.


function calculateFactorial(n)
{
    if(n<0) return "invalid";
    let m=1;
    for(let i=1;i<=n;i++)
    {
        m*=i;
    }
    return m;
}


console.log(calculateFactorial(5))
console.log(calculateFactorial(-3))
