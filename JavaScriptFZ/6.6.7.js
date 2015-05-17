var myObject = new Object();
var arr = new Array();

console.log(Object.prototype.isPrototypeOf(myObject));
console.log(Array.prototype.isPrototypeOf(myObject));
console.log(Object.prototype.isPrototypeOf(arr));
console.log(Array.prototype.isPrototypeOf(arr));