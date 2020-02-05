var arr=[3,4,5,6,7,8,0,1];
var x=arr.every(myFunction);
var y=arr.some(myFunction1);
//if all the element don't satisfy the condition then it will return the false value
function myFunction(val)
{
    return val<10;
}
function myFunction1(val,index,arr)
{
    return val<5;
}
//console.log(x);
//console.log(y);
var a=arr.indexOf(6);
console.log(a);
