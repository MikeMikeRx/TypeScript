// Enum

enum Role {ADMIN, AUTHOR, READ_ONLY}

const employee = {
    name: "Michal",
    age: 28,
    role: Role.ADMIN
}

console.log(employee.role)

if(employee.role === 0){
    console.log("Admin rights");    
}

/*
Role:
    0 - admin
    1 - author
    2 - read_only
*/