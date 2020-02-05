var myArr=["bat","ball","wicket"];
var text="<ul>"
myArr.forEach(myFun);
text=text+"</ul>"
function myFun(value)
{
    text=text+"<li>"+value+"</ul>";
} 
document.getElementById("demo").innerHTML=text;