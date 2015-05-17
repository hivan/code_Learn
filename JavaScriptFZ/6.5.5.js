function pen (color,price) {
  this.color = color;
  this.price = price;
}

pen.prototype.name = "钢笔";

var myPen = new pen("蓝色", 30);

console.log(myPen.color);
console.log(myPen.price);
console.log(myPen.name);
console.log(myPen.constructor.prototype.name);

pen.prototype.name = "铅笔";
console.log(myPen.name);

// 存储对象属性
myPen.type = "some thing";
console.log("新增加的属性: "+myPen.type);
console.log("原型对象重的type属性为: "+myPen.constructor.prototype.type);
