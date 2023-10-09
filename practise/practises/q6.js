//Write a function reverseString(str) that reverses a given string.

function reverseString(str)
{
    return str.split('').reverse().join('');
}

//here str.split converts the string into array of characters and reverse, reverses the order of array and join is used to join the character of arrays 

console.log(reverseString("learnwithsusan"))