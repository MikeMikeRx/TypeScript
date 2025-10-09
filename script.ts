/*Consider the following object that we created earlier:

const house = {
    windows: 4,
    doors: 1,
    color: "white",
    height: 50
}

Your task is to create a function that accepts this object as its only argument and prints the following sentence to the console:

"This house has 4 windows, 1 door, its color is white, and its height is 50 meters."

The function should accept a single parameter (which you can name as you like). When calling the function, simply pass the house object.

You may use either string concatenation (+) or template literals (backticks ` ` with ${expression}) to construct the output sentence. The choice is yours.*/

const house = {
    windows: 4,
    doors: 1,
    color: "white",
    height: 50
}

const house2 = {
    windows: 8,
    doors: 1,
    color: "blue",
    height: 70
}


function description (x){
    console.log(`This house has ${x.windows} windows, ${x.doors} door, its color is ${x.color} and its height is ${x.height} meters`);   
}

description(house2)