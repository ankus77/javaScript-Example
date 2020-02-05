var arr=[3,5,7,9,8,6,1];
var x=arr.reduceRight(myFunction);
function myFunction(total,val,index,arr)
{
    return total+val;
}

console.log(x);
