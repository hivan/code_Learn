function myFun () {
  var arrLength = arguments.length;
  for(i=0; i<arrLength; i++){
    for(j=arrLength; j>i; j--){
      if(arguments[j] < arguments[j-1]){
        temp = arguments[j];
        arguments[j] = arguments[j-1];
        arguments[j-1] = temp;
      }
    }
  }
  for(i=0; i<arrLength; i++){
    console.log(arguments[i]);
  }
}

// 定义一个对象
var myObject  = new Object();

// 定义一个数组
var arr = [2,345,677,21];
// 使用apply方法
myFun.apply(myObject, arr);

// 直接将数组做参数
myFun.apply(myObject, [23,4,102]);

// 使用arguments对象传递参数
function myFun1 () {
  myFun.apply(myObject, arguments);
}
myFun1(23,445,67,123,23);