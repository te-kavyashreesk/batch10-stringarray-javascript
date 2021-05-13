
var person={
    uname:"kavya",
    Age:22,
    heigth:"5.1f",
    gender:"female",
    hobbies:["sleeping","reading story"],
    address :{
        houseno:4,
        strret:"abc",
        city:"mandya",
    },
    eating:function()
    {
        console.log(this.iname + "is eating");

 
},
sleeping:function()
{
    console.log(this.uname + "is sleeping");
},
};

console.log(person);
console.log(person.name);
console.log(person["age"]);
