var myString = "This is my string";
var myArr = myString.split(" ");
console.log(myArr.length);
for(var i =0;i< myArr.length; i++){
  console.log("myArr["+i+"]="+myArr[i]);
}
myArr[myArr.length] = "又添加的元素";
console.log(myArr.length);
console.log(myArr);
myArr[myArr.length] = "继续添加的元素";
console.log(myArr.length);
console.log(myArr);