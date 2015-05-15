function pen (name,color,price) {
  this.name = name;
  this.color = color;
  this.price = price;
}
var pen1 = new pen("pen", "red", 20);
var pen2 = new pen("pencil", 'blue', 30);
var pen3 = new pen("pen", "green", 10);

console.log("笔1的名称为: "+pen1.name);
console.log("笔2的名称是: "+pen2.name);
console.log("笔1的颜色为: "+pen1.color);
console.log('笔2的颜色是: '+pen2.color);
console.log('笔1的价格是: $'+pen1.price);
console.log("笔2的价格是: $"+pen2.price);