var myArr=[3,4,5,7,8,9,1];
//map methods return a new array ...it is applicable in each element in the array

var y=myArr.map(myFun);

function myFun(val)
{
    return val*2;
}



console.log(myArr);
console.log(y);