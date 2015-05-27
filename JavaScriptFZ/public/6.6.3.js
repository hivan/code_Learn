var myObject1 = new Object();

myObject1.name = "pencil";
myObject1.price = 260;
var myObject2 = new Object(1.2333234);
var myObject3 = new Object(false);
var myObject4 = new Object("str");

console.log(myObject1.toString());
console.log(myObject2.toString());
console.log(myObject3.toString());
console.log(myObject4.toString());