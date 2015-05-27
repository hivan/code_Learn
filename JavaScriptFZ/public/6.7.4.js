var myNumber1 = new Number(10);
var myNumber2 = Number("10.23");
var myNumber3 = 123.245;

console.log("myNumber1 = "+myNumber1.toLocaleString());
/*
toLocaleString()方法是数字对象的方法，虽然myNumber2和myNumber3都只是一个变量，但是也可以直接使用toLocaleString()方法。因为JS回自动在数字与数字对象之间转换
 */
console.log(myNumber2.toLocaleString());
console.log(myNumber3.toLocaleString());

// 以下代码中，字符串无法转换为数字，所以返回NaN;
var myNumber4 = Number("1230.232343244324");
console.log(myNumber4);

console.log("JS中的最大数字为: "+Number.MAX_VALUE);
var myNumber = Number.MAX_VALUE / 1000;
console.log(myNumber);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE*1000);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(myNumber4.toString(2));
console.log(myNumber4.toString());
console.log(myNumber4.toLocaleString());
console.log(myNumber4.toExponential(1));
console.log(myNumber4.toFixed(4));
console.log(myNumber4.toPrecision(2));
console.log(myNumber4.toPrecision(5));

console.log(Math.abs(myNumber4));
console.log(Math.acos(0.9));
console.log(Math.asin(0.9));
console.log(Math.atan(myNumber4));
