var myObject = new Object();
myObject.name = "铅笔";

/*
name是myObject对象的属性;
name不是继承过来的;
name属性是可以枚举的
 */

console.log(myObject.name+":"+myObject.hasOwnProperty("name"));
console.log(myObject.color+":"+myObject.hasOwnProperty("color"));
console.log(myObject.constructor+":"+myObject.hasOwnProperty("constructor"));