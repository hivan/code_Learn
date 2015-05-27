var myObject1 = new Object();
myObject1.name = "pencil";
myObject1.price = 20;

var myObject2 = new Object(1.2345);
var myObject3 = new Object(false);
var myObject4 = new Object("str");

console.log(myObject1.valueOf());
console.log(myObject2.valueOf());
console.log(myObject3.valueOf());
console.log(myObject4.valueOf());