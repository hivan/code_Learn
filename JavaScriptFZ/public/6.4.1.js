function pen (name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}
var pen1 = new pen("pencil", "red", 10);
var pen2 = new pen("pen","blue");

console.log(pen1.name);
console.log(pen1.color);
console.log(pen1.price);
console.log(pen2.name);
console.log(pen2.color);
console.log(pen2.price);