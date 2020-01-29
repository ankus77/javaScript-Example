//we can't directly asign date to a variable bcz date is a type object thats why
//we need to first create an object.........
var x=new Date("1997-09-06");
console.log(Number(x));
console.log(typeof(x));
var y=new Date();
console.log(Number(y));
var day=(Number(y)-Number(x))/(1000*60*60*24);
var year=day/365.5;
console.log("so my age is "+year.toFixed(1));
