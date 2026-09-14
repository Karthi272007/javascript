let person =
{
    Name: "Karthi",
    Age: 18,
    sayHlo: function()
    {
        console.log("My name is "+ this.Name);
    }
}

console.log(person.name);
console.log(person.age);

person.name = "Karthi";
person.age = 19;

console.log(person.name);
console.log(person.age);

person.sayHlo();
