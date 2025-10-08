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

enum House_Condition {HABITABLE, NORMAL, UNINHABITABLE}

const house = {
    color: "white",
    contidition: House_Condition.UNINHABITABLE
}

console.log(house.contidition);
