var arr=[4,6,8,9,7,5,3,2,1];
//forEach function calls a call back function every time for each element in the array
txt="";//null string
arr.forEach(myFunction)//function call
function myFunction(val,index,arr)
{
    //here all the elements taken as a string
    txt=txt+val;
}

console.log(txt);