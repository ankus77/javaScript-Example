var fruits=["mango","banana","orange","pineapple"];
//console.log(fruits);

//to string methods convert the array to a string with comma separated each elemnts

var test=fruits.toString();
console.log(fruits.join("^"));
//console.log(test);
var test1=fruits.splice(0,4,"ankus","ankan","sumita arun","sayan");
console.log(fruits);
console.log(test1);

//bcz we know that test1 stores the removed elements