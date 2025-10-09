function combination(input1, input2, resultType) {
    var result;
    if (typeof (input1) === "number" && typeof (input2) === "number" || resultType === "as-number") {
        result = +input1 + +input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}
console.log(combination(4, 8, "as-number"));
console.log(combination("Rais", "Michal", "as-text"));
console.log(combination("10", "25", "as-number"));
console.log(combination("10", 5, "as-number"));
