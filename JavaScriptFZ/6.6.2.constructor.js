var myObject1 = new Object();
var myObject2 = new Object(1.2324);
var myObject3 = new Object(false);
var myObject4 = new Object("str");

console.log(myObject1.constructor);
console.log(myObject2.constructor);
console.log(myObject3.constructor);
console.log(myObject4.constructor);

if(myObject1.constructor == Object){
  console.log("对象");
}
if(myObject2.constructor == Number){
  console.log("数字");
}
if(myObject3.constructor == Boolean){
  console.log("布尔");
}

if(myObject4.constructor == String){
  console.log("这是一个字符串");
}