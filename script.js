// Array
var employees;
employees = ["Mike", "Dave", "Daniela", 8, true];
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var oneEmployee = employees_1[_i];
    console.log(oneEmployee);
}
var person = {
    firstName: "Michal",
    secondName: "Rais",
    age: 28,
    hobbies: ["coding", "programming", "sport"]
};
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
for (var _a = 0, _b = person.hobbies; _a < _b.length; _a++) {
    var oneHobby = _b[_a];
    console.log(oneHobby);
}
