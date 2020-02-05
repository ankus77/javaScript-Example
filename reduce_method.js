var arr=[1,2,3,4,5,7,6,0,9];
//use reduce mathod is to run every array element so that it can reduced to a single value
var x=arr.reduce(myFunction,100) //(function,initial value as total)


//total is either initial value or the value that return in the privious 
function myFunction(total,val)
{
    return total+val;
}

console.log(x);
