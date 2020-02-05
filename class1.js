Class Car{
    constructor(name)
    {
        this.carname=name;
    }
    myfun(x)
    {
        console.log("name of the car :"+this.carname+"model no:"+x);
    }
}
obj=new Car("hummer");
obj.myfun(123);
