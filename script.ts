// Function as a Type - practice arrow functions

//1.
function test1(num1: number, num2: number, num3: number) {
    return num1 + num2 + num3
}

let myFunction1: (x: number, y: number, z:number) => number


//2.
function test2(description: string){
    return description
}

let myFunction2: (x: string) => string


//3.
function test3(myString: string, myNumber: number){
    return myString
}


let myFunction3: (x: string, y:number) => string

//------------------------------------------------------------
myFunction1 = test1
myFunction2 = test2
myFunction3 = test3
