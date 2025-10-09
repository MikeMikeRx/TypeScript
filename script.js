// Callback function
var y = function (x) { return console.log(x); };
y(10);
y(50);
function sum(n1, n2, callBackFun) {
    var result = n1 + n2;
    callBackFun(result);
}
sum(5, 30, function (x) { return console.log(x); });
