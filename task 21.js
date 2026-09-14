const First_name = "T";
const Last_name = "Karthi";
let age = 18;

const introduction = `Hello my Name is ${First_name} ${Last_name} and I am ${age} years old.`;

function greeting(name = "guest")
{
    console.log(`Hello ${name}! Have a great day.`);
}

console.log(introduction);
greeting("karthi");
greeting();
