// Function as a Type
function sum(num1, num2) {
    return num1 + num2;
}
function test(description) {
    return description;
}
var myNumber = 5;
var myString = "Michal";
// let myFunction: Function
var myFunction;
myFunction = sum;
// myFunction = test
console.log(myFunction(15, 25));
