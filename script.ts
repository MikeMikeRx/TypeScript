// Tuples

const array: string[] = ["Mike", "Dave", "Tom"]
const tuples: [string, number, number, boolean]= ["Mike", 10, 8, true]

const employee: {
    name: string,
    age: number,
    hobbies: string[],
    department: [number, string]
} = {
    name: "Mike",
    age: 28,
    hobbies: ["sport", "coding", "programming"],
    department: [2, "software developer"]
}

console.log(employee.department[0]);
console.log(employee.department[1]);

for(const department of employee.department){
console.log(department)}
