// Return and void

function sum(n1:number, n2:number): number {
    return n1 + n2
}

const result = sum(5,4)

function sum2(n1: number, n2: number): string{
    return n1.toString() + n2.toString()
}

//void
function writeResult(num: number){
    console.log(`Result: ${num}`)
}

writeResult(15)