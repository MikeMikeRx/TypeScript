/*Real Estate Agency and House Condition

You have the following object:

const house = {
color: "white"
}

Outside the object, create an enum called HouseCondition and fill it with three values:
habitable,
normal,
uninhabitable.

Add a property condition to the house object and assign from the enum that it is uninhabitable.

Print this property to the console using console.log. Note: only the numeric value will be printed. */
var House_Condition;
(function (House_Condition) {
    House_Condition[House_Condition["HABITABLE"] = 0] = "HABITABLE";
    House_Condition[House_Condition["NORMAL"] = 1] = "NORMAL";
    House_Condition[House_Condition["UNINHABITABLE"] = 2] = "UNINHABITABLE";
})(House_Condition || (House_Condition = {}));
var house = {
    color: "white",
    contidition: House_Condition.UNINHABITABLE
};
console.log(house.contidition);
