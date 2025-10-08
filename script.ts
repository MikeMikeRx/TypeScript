/*Task 1 - video 5

Real estate agency

We are describing a house. The house has 4 windows, 1 door, the color is white, the height is 50 meters, it is new, it has a garage.

Your task is to enter these values ​​into the following variables and always write the correct data type for them:

windows
doors
color
height
isNew (yes, no)
garage (yes, no)

write to the console:
*/

const windows: number = 4
const doors: number = 1
const color: string = "white"
const height: number = 50
const isNew: boolean = true
const garage: boolean = true

const house = {
    windows,
    doors,
    color,
    height,
    isNew,
    garage
}

console.log(house)
