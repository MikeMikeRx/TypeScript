/* Real estate agency and client array
To the following object:

const house = {
    windows: 4,
    doors: 1,
    color: "white",
    height: 50,
    isNew: true,
    garage: true
}

You have to add two arrays.

The first one will be called vipClients and will contain the companies that are interested in the house. The companies will be Build-store, Damage-do, Bum-bum-company.

The second array will be the interested people from among ordinary people. The interested people are Dean Builder, Peter Windowman and Cate Floor.

Next, you have to write the first and last of both arrays to the console.*/
var vipClients = ["Build-store", "Damage-do", "Bum-bum-company"];
var clients = ["Dean Builder", "Peter Windowman", "Cate Floor"];
var house = {
    windows: 4,
    doors: 1,
    color: "white",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: vipClients,
    clients: clients
};
console.log(house.vipClients[0]);
console.log(house.vipClients[2]);
console.log(house.clients[0]);
console.log(house.clients[2]);
