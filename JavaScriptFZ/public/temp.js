function myCheck (parames) {
  if(parames.length != parames.callee.length){
    return false;
  }else{
    return true;
  }
}
function mySum (x,y) {
  if(myCheck(arguments)){
    var z= x*y;
    return z;
  }else{
    return "您所传入的参数不正确，请传入两个值";
  }
}
console.log(mySum(3,4));
console.log(mySum(3,4,5));