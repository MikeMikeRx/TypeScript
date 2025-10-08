// Union type
function combinationX(input1, input2) {
    var result;
    if (typeof (input1) === "number" && typeof (input2) === "number") {
        result = input1 + input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}
console.log(combinationX(5, 6));
console.log(combinationX("Michal", "Rais"));
