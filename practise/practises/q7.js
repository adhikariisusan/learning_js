//Write a function findLargestPrime(n) that finds the largest prime number less than or equal to n.

function isPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
            return false;
    }
    return true;
}

function findLargestPrime(n)
{
    if(n<0)
        return "invalid";
    let temp;
    for(let i=2;i<=n;i++)
    {
        if(isPrime(i)==true)
        temp=i;
    }
    return temp;
}

console.log(findLargestPrime(50))
console.log(findLargestPrime(-5))