function mySum (x,y) {
  if(isNaN(x) || isNaN(y)){
    return "参数必须是数字";
  }else{
    var z = x-y;
    return z;
  }
}

console.log(mySum(1,2));
console.log(mySum("a", 2));