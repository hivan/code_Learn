var myString1 = new String("My String");
var myString2 = String("My String");
var myString3 = "my String";
console.log(myString1.length);
console.log(myString2.length);
console.log(myString3.length);
console.log(typeof(myString1));
console.log(typeof(myString2));
console.log(typeof(myString3));

var myString = new String("我的字符串");
console.log(myString.length);
var myString = "我的字符串MyString";
console.log(myString.length);
var myString = "My String";
console.log(myString.length);

// 查找字符串
var myString = "我的字符串---This is my String---字符串结束";
console.log("初始字符串: "+myString);
console.log("字符串的第五个字为: "+myString.charAt(4));
console.log("字符串的第五个字的代码为: "+myString.charCodeAt(4));
console.log("'字符串'在myString中第一次出现的位置: "+myString.indexOf("字符串"));
console.log("'他的'在myString中第一次出现的位置: "+myString.indexOf("他的"));
console.log("在字符串的第十个字符开始查找’字符串‘第一次出现的位置: "+myString.indexOf("字符串", 9));
console.log("'字符串'在myString中最后一次出现的位置: "+myString.lastIndexOf("字符串"));
console.log("'他的'最后一次出现的位置: "+myString.lastIndexOf("他的"));
console.log("在字符串的倒数第十个字符开始查找'字符串'最后一次出现的位置"+myString.lastIndexOf("字符串",9));
console.log("查看myString中是否包含‘字串’"+myString.match("字串"));
console.log("将字符串中的'我的'替换为'他的':"+myString.replace("我的","他的"));
console.log("查找子字符(正则): "+myString.search("字符串"));
console.log("查找子字符(正则): "+myString.search("他的"));
console.log("字符串的第三个到第七个字符为: "+myString.slice(2, 7));
console.log("字符串的倒数第24个字符到顺数第24个字符为: "+myString.slice(-24, 24));
console.log("字符串的倒数第五个字符到顺数第一个字符为: "+myString.slice(-5, -1))
console.log("字符串的第三个字符开始的后四个字符为: "+myString.substr(2,4));
console.log("字符串的第三个到第四个字符为: "+myString.substring(2,4));

myString = myString.replace("我的", "他的");
console.log(myString);
myString = myString.replace("字符串", "你妈比");
console.log(myString);

myString = "This is a myString";
myString = myString.toLocaleUpperCase();
console.log(myString);

// 创建新的字符串

myString1 = String.fromCharCode(1282, 102,103);
myString2 = myString1.concat(", 在加一个字符串");
myString3 = myString1.concat("，再加一个字符串", "， 多加几个也无所谓");
console.log(myString1);
console.log(myString2);
console.log(myString3);

// 其他方法
var myString = "This is my string";
// 用本地特定的顺序类比较两个字符串
console.log(myString.localeCompare("This is my string"));
// 目标字符串排在前，返回1
console.log(myString.localeCompare("That is your string"));
// 目标字符串排在后，返回0
console.log(myString.localeCompare("what is string?"));

// 使用空格分割字符串
var myArr1 = myString.split(" ");
console.log("数组长度: "+myArr1.length);
console.log("数组内容: "+myArr1.toString());

var myArr2 = myString.split(" ", 2);
console.log("数组长度: "+myArr2.length);
console.log("数组内容: "+myArr2.toString());

console.log("返回字符串"+myString.toString());
console.log("返回字符串"+myString.valueOf());

var myString = "我的字符串";

console.log("原字符串: "+myString);
console.log("big:"+myString.big());
console.log(myString.blink());
console.log(myString.bold());
console.log(myString.fixed());
console.log(myString.fontcolor("red"));
console.log(myString.fontsize("12"));
console.log(myString.italics());
console.log(myString.small());
console.log(myString.strike());
console.log(myString.sub());
console.log(myString.sup());



