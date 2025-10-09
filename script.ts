// Function as a Type

function sum(num1: number, num2: number){
    return num1 + num2
}

function test(description: string){
    return description   
}

let myNumber = 5
let myString = "Michal"

// let myFunction: Function
let myFunction: (x: number, y: number) => number
myFunction = sum
// myFunction = test

console.log(myFunction(15,25))