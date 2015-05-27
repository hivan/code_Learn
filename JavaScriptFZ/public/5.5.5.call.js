function myFun() {
  var arrLength = arguments.length;
  for (var i = 0; i < arrLength; i++) {
    for (j = arrLength; j > i; j--) {
      if (arguments[j] < arguments[j - 1]) {
        temp = arguments[j];
        arguments[j] = arguments[j - 1];
        arguments[j - 1] = temp;
      }
    }
  }
  for (i = 0; i < arrLength; i++) {
    console.log(arguments[i]);
  }
}

var myObject = new Object();
myFun.call(myObject, 13, 3, 95);

// 上一句与以下代码结果相同

// myObject.temp =  myFun;
// myObject.temp(13,4,28);
// delete myObject.temp;

