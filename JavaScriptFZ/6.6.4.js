var myObject1 = new Object();
myObject1.name = "pencil";
myObject1.color = "red";
myObject1.price = 260;

var myObject2 = new Object(1.23344);
var myObject3 = new Date();

console.log("toString: "+myObject1.toString());
console.log("toLocaleString: "+myObject1.toLocaleString());
console.log("toString: "+myObject2.toString());
console.log("toLocaleString: "+myObject2.toLocaleString());
console.log("toString: "+myObject3.toString());
console.log("toLocaleString: "+myObject3.toLocaleString());