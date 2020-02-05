var myArr=[
    {s_name:"anku",year:2016},
    {s_name:"ankan",year:2017},
    {s_name:"sumita",year:2018},
    {s_name:"arun",year:2019}
]


//now we can also sort the array of objects depending on the particular type

//sorting the string type is little bit trickey in case of objects
myArr.sort(function(a,b){

    //convert the whole string as full lower case or full upper case then compare
    var x=a.toLowerCase;
    var y=b.toLowerCase;
    console.log(x);
    console.log(y);
    if(x>y)return 1;
    if(x<y)return -1;
}
)
console.log(myArr);