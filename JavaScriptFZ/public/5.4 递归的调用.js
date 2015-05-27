
// 递归调用
// 使用函数名的递归调用
function myFun (x) {
  if(x%2 == 0){
    alert(x);
  }
  if(x>1){
    return myFun(x-1);
  }
}
myFun(10);

// 使用callee属性的递归调用
function myFun (x) {
  if(x%2 == 0){
    alert(x);
  }
  if(x>1){
    arguments.callee(x-1);
  }
}

myFun(10);