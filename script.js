// Function as a Type - practice arrow functions
//1.
function test1(num1, num2, num3) {
    return num1 + num2 + num3;
}
var myFunction1;
//2.
function test2(description) {
    return description;
}
var myFunction2;
//3.
function test3(myString, myNumber) {
    return myString;
}
var myFunction3;
//------------------------------------------------------------
myFunction1 = test1;
myFunction2 = test2;
myFunction3 = test3;
