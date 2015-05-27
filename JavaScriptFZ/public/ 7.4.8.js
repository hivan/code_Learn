var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = arr.splice(5, 1);
console.log("删除的元素为: "+arr1.toString());
console.log("原数组剩余元素为 "+arr.toString());

var arr2 = arr.splice(1, 3);
console.log("删除的元素为: "+arr2.toString());
console.log("原数组剩余元素为: "+arr.toString());

var arr3 = arr.splice(1,3, "a", "b", "c", "d","e");
console.log("删除的元素为: "+arr3.toString());
console.log("原数组剩余元素为: "+arr.toString());

var arr4 = arr.splice(1, 0, true, false);
console.log("删除的元素为: "+arr4.toString());
console.log("原数组剩余元素为: "+arr.toString());

