var arr1 = new Array();

console.log(arr1.length);

arr1[0] = "String";
arr1[1] = true;
arr1[2] = 13;

console.log(arr1);
console.log(arr1.length);

var arr2 = new Array(3);
arr2[3] = false;

console.log(arr2.length);

var arr3 = new Array("String", true, 13);
console.log(arr3.length);
arr3[10] = false;
console.log(arr3.length)
console.log(arr3[3]);