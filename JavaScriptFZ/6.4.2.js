function pen (name,color,price) {
  this.name = name;
  this.color = color;
  if(price == undefined){
    this.price = 100;
  }else{
    this.price = price;
  }
}

var pen1 = new pen("pen", "red", 10);
console.log(pen1.name);
console.log(pen1.color);
console.log(pen1.price);

var pen2 = new pen("pencil", "blue");
console.log(pen2.name);
console.log(pen2.color);
console.log(pen2.price);
