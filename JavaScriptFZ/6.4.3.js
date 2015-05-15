function write(str){
    document.write(str+"<br>");
}

function pen(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    this.write = write;
}

var pen1 = new pen("pen", "red", 20);
pen1.write("this is text");