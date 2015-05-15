function pen (name,color,price) {
  this.name = name;
  this.color = color;
  this.price = price;
}
var pen1 = new pen("铅笔", "red", 10);
for(var i in pen1){
  console.log("变量名为: "+i+", 变量值为: "+pen1[i]);
}
delete pen1.price;
for(var i in pen1){
  console.log("变量名为: "+i+", 变量值为: "+pen1[i]);
}
console.log("这是一个不存在的属性: "+pen1.price);