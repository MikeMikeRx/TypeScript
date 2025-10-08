// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var employee = {
    name: "Michal",
    age: 28,
    role: Role.ADMIN
};
console.log(employee.role);
if (employee.role === 0) {
    console.log("Admin rights");
}
/*
Role:
    0 - admin
    1 - author
    2 - read_only
*/ 
