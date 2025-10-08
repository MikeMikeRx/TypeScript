/* Real Estate Agent House Area

You have a real estate agent in a city that is divided into five sections. These sections are numbered (1 to 5). Each section is further divided into north, south, west, east, and center. Add a tuple named location to the house object, which always has two pieces of information - the section number and the designated area. This house will be in section 5 and in the southern area.

const house = {
color: "white"
}

Write the tuple to the console using console.log and a for loop */

const house: {
    color: string,
    location: [number, string]
} = {
    color: "white",
    location: [5, "south"]
}

console.log(house.location[0]);
console.log(house.location[1]);


for (const area of house.location){
console.log(area)}