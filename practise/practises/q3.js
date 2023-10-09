//Write a function printMultiples(n, m) that prints the first m multiples of a number n.

function printMultiples(n,m)
{
    for(let i=0;i<m;i++)
    {
        console.log(n+" times "+(i+1)+" is:"+((i+1)*n));
    }
}

printMultiples(4,10);