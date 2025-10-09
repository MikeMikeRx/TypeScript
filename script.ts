// Callback function

const y = (x: number) => console.log(x)

y(10)
y(50)

function sum(n1: number,n2 :number, callBackFun: (n3: number) => void){
    const result = n1 + n2
    callBackFun(result)
}

sum(5, 30, (x) => console.log(x))
