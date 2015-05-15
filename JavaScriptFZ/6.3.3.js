var pen = new Object();

pen.name = "pencil";
pen.color = "red";
pen.price = 20;

for(var i in pen){
  console.log("变量名为: "+i+", 变量值为: "+pen[i]);
}