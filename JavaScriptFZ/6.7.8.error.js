var myString = "My String";
try{
  var errString = myString.subString(2,4);
}
catch(ex){
  console.log(ex.message);
}

function myFun (x, y) {
  var z;
  try{
    if(y == 0){
      var myErr = new Error("除数不能为0")
      throw myErr;
    }
    z = x/y;
  }
  catch(ex){
    z = ex.message;
  }
  return z;
}

console.log(myFun(1, 0));

var myString = "My String";
try{
  // 使用方法时将方法的大小写输入错误
  var errString = myString.subString(2, 4);
}
catch(ex){
  console.log(ex.name);
  console.log(ex.message);
}