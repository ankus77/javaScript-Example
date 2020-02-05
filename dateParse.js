var date=new Date("25 feb 2016");

//if we have a valid date string the Date.parse method will return the number of millisecond 
//between 1 jan 1970 to given date
var y=Date.parse(date);
console.log(y);