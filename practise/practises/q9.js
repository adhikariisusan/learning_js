//Create a function isPalindrome(str) that checks if a given string is a palindrome.


function revstring(str)
{
    return str.split('').reverse().join('');
}

function isPalindrome(str)
{
    if(str==revstring(str))
        return true;
    return false;
}


console.log(isPalindrome("dad"));
console.log(isPalindrome("Susan"))