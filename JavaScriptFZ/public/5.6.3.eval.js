function pen (color,price) {
  this.color = color;
  this.price = price;
}

var pen1 = new pen("red", 10);
var pen2 = new pen("blue", 20);
var pen3 = new pen("green", 30);

for (var i = 1; i < 4; i++) {
  var penx = eval("pen"+i);
  console.log("pen"+i+"'s color is "+penx.color+", is：$"+penx.price);
  // 以下输出为字符串而不是对象
  var peny = "pen"+i;
  console.log("pen"+i+"'s color is "+penx.color+", is: $"+penx.price);
};

