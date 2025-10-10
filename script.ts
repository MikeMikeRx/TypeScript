// Never type

function test(myValue: number){
    return myValue
}

function generateError(errorText: string, errorNumber: number): never {
    throw {message: errorText, errorCode: errorNumber}
}


generateError("Fatal Error", 999)