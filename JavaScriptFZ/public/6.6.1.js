var myObject1 = new Object();
var myObject2 = new Object(1.3444);
var myObject3 = new Object(false);
var myObject4 = new Object("str");
// 返回新对象的类型
console.log(typeof(myObject1));
// 取小数点后三位
console.log(myObject2.toFixed(3));
// 返回布尔对象的布尔值
console.log(myObject3.valueOf());
// 返回字符串的第一个字符
console.log(myObject4.charAt(0));