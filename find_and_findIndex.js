var myArr=[1,2,3,4,5,6,7,8,9];
var x=myArr.find(myFunction);

var y=myArr.findIndex(myFunction);
function myFunction(val)
{
    return val>6;
}

console.log(x);
console.log(y);