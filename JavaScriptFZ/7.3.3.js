var arr = new Array("字符串", true, 13);
console.log("删除元素之前数组种的元素的个数为: "+arr.length);
console.log("删除元素之前数组种的元素为: "+arr);

delete arr[1];
console.log(arr.length);
console.log(arr);