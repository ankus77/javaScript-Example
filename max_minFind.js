//other method to finding the min and max value is using loop
function findMax(arr)
{
    var len=arr.length;
    var max=arr[0];
    for(var i=0;i<len-1;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
} 
//here one important things to rember that we normally pass the array as it is .....
//i thing there is no concept of the pointer
function findMin(arr)
{
    var len=arr.length;
    var min=arr[0];
    for(var i=0;i<len-1;i++)
    {
        if(arr[i]<min)
        min=arr[i];
    }
    return min;
}



var arr=[5,7,9,8,3,1];//this is a simple array 

//now our task is to find the min and max value using loop


console.log("max element in this given array are : "+findMax(arr));
console.log("min value of the array is : "+findMin(arr));
