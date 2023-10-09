//Create a function isPrime(num) that determines whether a given number is prime or not.

function isPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
            return false;
    }
    return true;
}

console.log(isPrime(19))
console.log(isPrime(24))