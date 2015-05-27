var arr = [39, 11, 3, 9, 1, 77];
console.log(arr.toString());

arr.sort();
console.log(arr.toString());

// 正序排序
function ascOrder (x, y) {
  if(x>y){
    return 1;
  }else{
    return -1;
  }
}

// 倒序排序
function descOrder (x, y) {
  if(x>y){
    return -1;
  }else{
    return 1;
  }
}

arr.sort(ascOrder);
console.log(arr);
arr.sort(descOrder);
console.log(arr);