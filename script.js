// Never type
function test(myValue) {
    return myValue;
}
function generateError(errorText, errorNumber) {
    throw { message: errorText, errorCode: errorNumber };
}
generateError("Fatal Error", 999);
