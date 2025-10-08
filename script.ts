// Array

let employees: any[]

employees = ["Mike", "Dave", "Daniela", 8, true]

console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

for (const oneEmployee of employees){
    console.log(oneEmployee);   
}

const person = {
    firstName: "Michal",
    secondName: "Rais",
    age: 28,
    hobbies: ["coding", "programming", "sport"]
}

console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

for (const oneHobby of person.hobbies){
    console.log(oneHobby);
}