// Tuples
var array = ["Mike", "Dave", "Tom"];
var tuples = ["Mike", 10, 8, true];
var employee = {
    name: "Mike",
    age: 28,
    hobbies: ["sport", "coding", "programming"],
    department: [2, "software developer"]
};
console.log(employee.department[0]);
console.log(employee.department[1]);
for (var _i = 0, _a = employee.department; _i < _a.length; _i++) {
    var department = _a[_i];
    console.log(department);
}
