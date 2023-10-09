//Write a function findCommonElements(arr1, arr2) that finds and returns an array with common elements between two arrays.

function findCommonElements(arr1,arr2)
{
    let k=0,arr=[];
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                arr[k]=arr1[i]
                k++;
            }                
        }
    }
    return arr;
}


let array=[1,2,3,4,5]
let array2=[4,5,6,7,8]

console.log(findCommonElements(array,array2));