function pen(color, price) {
  this.color = color;
  this.price = price;
}
var pen1 = new pen("红色", 20);

console.log(pen1.color);
console.log(pen1.price);
console.log(pen1.name);

pen.prototype.name = "pen";

var pen2 = new pen("blue", 30);
console.log(pen2.color);
console.log(pen2.price);
console.log(pen2.name);
pen2.name = "pencil";

console.log("pen2 name is " + pen2.name);
