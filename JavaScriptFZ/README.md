
# 第一篇 基础篇
## 　第一章 JavaScript 基础
### 1.1 脚本语言的介绍
脚本语言是一种简单的程序，由ASCII字符构成。不需要编译，只需要适应的解释器(Interpreter)就可以执行。
#### 分类
服务器脚本语言和客户端脚本语言

#### JavaScript
#### 类，对象与对象实例
JavaScript没有类的概念
	var now = new Date();
所以把对象实例也简称为对象。

#### 指定MIME类型
	<script type="text/javascript"></script>

#### defer属性
### 执行方式
#### 直接执行
#### “javascript:” 调用
	<a href="javascript:alert('')">click me</a>
or
	<a href="javascript:OnclickLink()">click me</a>

#### 与事件结合使用
### 注意事项
- 大小写敏感
- 换行符
- 分号

## 第二章 数据类型，常量和变量
### 2.1 基本数据类型
- 字符串型
	- JavaScript没有字符类型(char)，只有字符串。
- 数字型
	- JavaScript没有整数型，只有浮点数
	- NaN，NaN不与任何数字相等，包括NaN，需要使用isNaN()来判断运算结果是不是NaN
- 布尔
### 2.2 复合数据类型
- 对象
- 数组
### 2.3 其他数据类型　
- 函数 `function`
	可执行的JavaScript代码
- null 空
### 2.4 数据类型的转换
#### 隐式转换
JS是无类型(Notype)语言,不需要制定变量数据类型，隐式转换
	if(1){console.log("true")}
- 数字类型：字符串环境下可以隐式转换为“数字”，布尔环境中可以转换为true或false(0)
- 非空字符串: 数字环境下转换为字符串中的数字(“123” -\> 123; “abc” -\> NaN )，布尔环境下转换为true
- 空字符串: 转换为0，转换为false
- 字符串”true” 转换为1，转换为true
- 字符串“flase”　转换为0，转换为false
- null 字符串环境下转换为”null”,数字转换为0，布尔转换为false
- NaN: 字符串转换为”NaN”, 布尔转换为false
- undefined: 字符串转换为”undefined”,数字转换为NaN, 布尔转换为false
- true or false: 字符串转换为”true” or “false”, 数字转换为1或者0

#### 显式转换
1. 转换成字符串
		var arr = ['javascript','VBScript','Script'];
		document.write{arr.toString()};
`toString`方法，除了数组以外，还有Date都想，Error对象，Number对象，Function函数等，都可以转换
2. 基本数据类型转换
	- 数字型转换为字符串，可以与一个空字符串相连
		var s = 123 + “”;
	- 字符串转换为数字，将其减0
		var s = "123" - 0;
	- 字符串或数字转换为布尔，可以将其连续使用两次`!`运算符
		var i = “true”;
		console.log(!!i);

### 2.5 常量
- 整数常量
- 浮点常量
- 字符串常量
- 布尔常量
- 数组常量
- 转义字符
### 2.6 变量
变量可称为标识符(Identifier)。

#### 命名
ASCII字符或`_`, 不能是数字，大小写敏感
要能看出作用
驼峰命名
不能写保留字

#### 类型
Notype
#### 定义变量
#### 定义的注意事项
1. 可重复定义变量
2. 变量必须先定义后使用
3. 给未定义的变量赋值
4. 引用未赋值的变量

#### 变量的值
- Number
- Logical 布尔值，也叫逻辑值
- String
- Null
- Undefined
			   　　　
#### 有效范围
- 全局
- 局部 （函数体内）
#### 使用的注意事项
1. 变量优先级
2. 函数内定义全局变量
	不使用var 直接赋值 `x = "abc"`
3. 嵌套函数体中的变量的有效范围
	函数可以嵌套，变量都可以在该函数体内以及嵌套的函数体内起作用，但是不能在父级以及父级以上内起作用。

### 2.7 保留字
[url][1]

## 第三章 表达式和运算符
#### 表达式
Expression就是一个语句，可以是常量或变量，也可以是由常量和两边组成的语句
- 常量表达式
- 变量表达式
- 复合表达式
#### 操作数
Operant是进行运算的常量或变量
#### 运算符介绍
- 一元运算符
- 二元运算符
- 三元运算符 `?:`
- 算数运算符
- 比较运算符
- 字符串运算符
- 赋值运算符
- 位运运算符
- 逻辑运算符
- 特殊运算符　　　　　　　　　

### 3.4 算数运算符
- 减法
- 减法
- 模
- 负号
- 正号
- 递增
- 递减
- 关系
- 等同
- 不等
- 不等同
- 小于
- 大于
- 大于或等于
- 小于或等于
- in运算符 判断字符串是否属于数组或对象
- instanceof运算符 判断对象与对象实例之间关系的运算符
- 字符串运算符 `+`
- 赋值运算符 `=`
- 逻辑运算符
	- 逻辑与
	- 逻辑或
	- 逻辑非
- 逐位运算符
	- 逐位与 `&`
	- 逐位或 `|`
	- 逐位异或 `^`
	- 逐位非 `~`
	- 左移运算符 `<<`
	- 带符号的右移运算符 `>>`
	- 用0补足的右移运算符 `>>>`

- 其他运算符
	- 条件运算符
	- new运算符
	- void运算符 (void舍弃了结果)
	- typeof运算符
	- 对象属性存取运算符 `.`
	- 数组元素存取运算符 `[]`
	- delete运算符
		- 内部核心属性和客户端属性不能删除
		- var定义的变量不能删除
		- 删除对象不存在返回true
		- 删除为定义的变量返回true
	- 逗号运算符
	- 函数调用运算符 `()`
	- this运算符 不需要属性，代表当前对象`this[.属性]`
- 运算符的优先级

[url][2]

[有关JavaScript的运算符][3]

## 第四章 语句

### 4.1 表达式语句
### 4.2 语句块
### 4.3 选择语句
- if
- if…else
- if…else if…else
- if…else if…
- if语句嵌套
- switch

### 4.4 循环语句
- while
- do…while
- for
- for…in

### 4.5 跳转语句
- break
- continue

### 4.6 异常处理语句
- throw语句
- try…catch…finally语句
- 综合应用
### 4.7 其他语句
- 标签语句
- var语句
- function语句
- return语句
- with语句
- 空语句
- comment语句 （注释语句)
## 第五章 函数
### 5.1 函数介绍
#### 为了重复使用而独立的代码块，独立主程序而存在。
#### 定义函数 `function`
	function 函数名 (参数1， 参数2...){
	    <语句块>
	    return 返回值
	}

#### 函数定义的注意事项
- 函数名通俗易懂
- 一个函数只实现一个功能
- 函数最好放在JS代码开头
- 合理安排函数的次序
- JS是一种无类型的语言，不会检测传递的参数是否符合要求
- 不会检测返回的值师傅符合函数的类型
#### 函数的嵌套定义
- 只能出现在函数中，不能出现在选择语句或循环语句中
- 嵌套定义的函数只能在嵌套的函数中调用，不能在其他函数中调用。
#### 使用Function()构造函数
	var x = new Function(“参数1”, “参数2”, “…”, “函数体”);　　

#### Function()构造函数与function语句的区别
-  Function()构造函数可以动态定义和编译函数, function语句只能预编译。如果函数经常使用，应该避免使用Function()
- Function()构造函数定义函数时可以将函数定义写成表达式
- Function()可以在一个表达式中定义函数，而function语句不能

#### 在表达式中定义函数
	var 函数名 = function(参数1，参数2，...）{函数体}
ex:
	var mySum = function(x, y){return x+y};

其实可以在function后写函数名
	var mySum = function 临时函数名(x, y){return x+y};
这种方法一般用在函数自身的递归上
	var myFun = function ftemp(x){if(x<1) return 1; else document.write(x); return ftemp(x-1);}

#### 三种定义函数方法的比较
- function语句可以在任何一个JS版本中使用，Function()构造函数只能在JS1.1或更高版本使用，表达式中定义只能在1.2或更高使用
- 只有function语句定义函数的方法不能在表达式中使用，其他两种都可以直接在表达式中定义函数
- 除了function语句定义函数的方法之外，其他两种使用起来都比较灵活，但是通常只使用一次，无需命名的函数中
- 除了function语句之外，如果其他两种方法的函数体中的语句比较多的话，看起来很臃肿
- 使用function语句定义函数和在表达式中定义函数的两种方法中，JS只会对函数解析和编译一次，而使用Function()构造函数定义的函数，每次调用函数，都会解析和编译一次。

### 调用函数
#### 直接调用无返回值的函数
- 直接调用 使用函数调用运算符(`()`);
- 事件处理 
#### 将函数的返回值赋给变量
#### 将函数的返回值赋给对象属性或数组元素
#### 综合应用
### 5.3 函数的参数
#### 传递参数的注意事项
以下是一些可能出现的情况:
- 传递的参数类型与函数所需要的数据类型不符
- 传递的参数个数与函数定义的参数个数不匹配

#### 传递函数参数的个数和值
- 判断传递的函数参数的个数
	`arguments.length`
- 获得实际传递参数的值
	`arguments`不仅可以判断个数，还可以获得参数的值
- Arguments对象的应用

### 5.4 函数的递归调用
#### 使用函数名的递归调用
`return 函数名(表达式)`
#### 使用callee属性的递归调用
`arguments.callee()`

### 函数的属性与方法
#### length属性:函数定义参数个数
获得函数定义的参数个数
函数的length属性可以在函数体之外使用
#### prototype属性: 引用原型对象
	对象.prototype.属性 = "参数";
#### caller属性，判断函数调用情况
`caller`查看函数在那里被调用，如果是顶层caller返回值为null,否则返回调用该函数当前函数的Function对象的引用:
#### 自定义属性
函数可以拥有自己的属性，和对象有点像。函数的属性与全局变量也有点像，但是函数的属性只属于函数本身，而不属于其他对象:
#### call()方法
	函数名.call(对象名，参数1， 参数2， ....)
`myFun.call(myObject, 123,4, 56);`
这句与一下代码实现的结果相同:
	myObject.temp = myFun;
	myObject.temp(123,4,56);
	delete myObject.temp;
#### apply()方法
	函数名.apply(对象名, 数组);
apply()要传入一个数组
apply()的另一个用法是放在其他函数内部

### 5.6 系统函数
#### 编码函数 escape()
字符串处理，将非文字，数字转换成相应的ASCII

#### 解码函数 unescape()

#### 求值函数eval()
主要作用是将字符串指定为对象

#### 数值判断函数isNaN()
判断是否为数字类型
#### 整数转换函数parseInt()
	parseInt(数据,底数)
底数是指出数值类型，如八进制就是8，十六进制就是16，二进制就是2，可以省略。

#### 浮点转换函数parseFloat()

## 第六章 对象
### 6.1 介绍
- 概念
- 属性
	`对象名.属性`
- 方法
	`对象名.方法名(参数列表)`

### 6.2 创建对象
#### 使用构造函数创建内置对象
JS中可以使用new运算符调用构造函数创建对象。
`var myObject = new Object()`

#### 直接创建自定义对象
`var 对象名 = {属性名1:属性值1, 属性名2:属性值2, 属性名3:属性值3,...}`

#### 使用自定义构造函数创建对象

### 6.3 对象的属性
#### 设置对象的属性
- 创建对象的同时设置对象的属性
- 创建对象的构造函数时设置对象的属性
- 先创建空对象，再设置对象属性
	设置对象的属性时，不能使用var
	由于对象也是一种数据类型，所以对象的属性值也可以是对象
#### 存取对象属性值
取值: `变量名 = 对象名.属性名`
赋值: `对象名.属性名=属性值`

#### 属性的枚举
JS可以通过`for...in`来枚举对象的所有属性
`for(var i in pen)`

#### 删除对象的属性
`delete`来删除对象的属性

### 6.4 构造函数
#### 创建简单的构造函数
#### 创建有默认值的构造函数
创建对象时，如果没有初始化某个属性，那么该属性的值会自动设置为undefined.

#### 创建有方法的构造函数
不知道为什么js检测不过，但是网页上可以执行.所以效果在 `6.4.3.html` 内

### 对象的原型与继承
#### 对象与类
JS没有正式“类”的概念，可以理解为构造函数就是类，使用构造函数创建对象，就是将类实例化。

#### 继承
#### 对象自己的方法和属性
#### 方法与属性的覆盖
#### 原型对象
1. 什么是原型对象
2. 原型对象的原理
3. 修改对象原型　　
`函数.prototype.属性 = "参数";`
`constructor`用于返回对象的构造函数
4. 存储对象属性
只有读取对象属性时，才回使用到原型对象，存储对象属性，是不需要使用原型对象的。

### 6.6 Object对象
#### 创建Object对象
	new Object();
	new Object(value);
如果没有制定value值，则Object不属于数组，也不属于布尔对象。

#### constructor属性: 返回对象的构造函数
`typeof`运算符判断操作数的类型，无法判断对象的类型。
`constructor`属性可以判断一个对象的类型，其引用的是对象的构造函数

实际使用中很少查看对象类型，而是通过if来判断是否属于某种类型

#### toString()方法，对象的字符串表示
`object.toString()`

#### toLocaleString()方法，返回对象的本地字符串表示
和`toString()`类似，但是格式转化成适合本地的表示法

#### propertyIsEnumerable()方法
判断属性是否方法所自有的
`object.propertyIsEnumerable(properyname)`
properyname为对象的属性名
- properyname必须是object的属性
- properyname不能是继承过来的属性
- properyname是可以通过`for...in`语句循环所枚举得到的属性
满足以上三点时候才回返回`true`

#### hasOwnProperty()方法:判断属性是否非继承的
与`propertyIsEnumerable`方法类似，判断一个属性是否非继承的属性。

`object.hasOwnProperty(properyname)`

- properyname必须是object的属性
- properyname不能使继承过来的

#### isPrototypeOf()方法：判断是否原型对象
判断一个对象是否另一个对象的原型对象
`object.prototype.isPrototypeOf(object1)`

#### valueOf()方法，返回对象的原始值
返回与对象相关的原始值，如果原始值不存在，则返回对象本身
`object.valueOf()`

### 6.7 其他系统对象

#### Arguments对象
`callee`属性: 对当前正在执行的函数的引用
`length`属性: 传递给函数的实际参数的个数

#### 布尔对象
1. 创建布尔对象和转换布尔值
	调用Boolean构造函数来创建一个布尔对象，将参数转换成一个布尔值
	`new Boolean(value)`
	只是将弃参数转换成一个布尔值
	`Boolean(value)`

2. toString(),将布尔对象转换成字符串
3. value()，返回布尔对象的布尔值

#### 日期对象
1. 创建日期对象
	`new Date();`
	`new Date(str);`
	\`new Date(year,month, day, hours, minutes, seconds, milliseconds);
	\`\`new Date(milliseconds);
	\`- str: 表示日期的字符串
	- year: 代表年份的数据
	- month: 代表月份的数据
	- day: 代表日期的数据
	- hours: 代表小时的数据
	- minutes: 代表分钟的数据
	- seconds: 代表秒钟的数据
	- milliseconds: 代表毫秒的数据
	- milliseconds1: 代表距离1970年1月1日0点时的毫秒数　

2. 将日期对象转换为字符串
	- date.toString(); 
		转换为本地时间
	- date.toLocaleString();
		转换为本地时间，将日期转化为地方日期格式
	- date.toUTCString();
		采用世界时间
	- date.toGMTString();
		采用GMT时间，目前反对使用，尽量使用UTC

	> UTC是协调世界时(Coordinated Universal Time)的简称,GMT是格林尼治时(Greenwich Mean Time)的简称

3. 将日期对象中的日期和时间转换为字符串
	将对象时间的日期或时间转换为字符串
	- date.toDateString()
		采用本地时间
	- date.toLocaleDateString();
		采用本地时间，显示为地方日期的格式
	- date.toTimeString();
		将时间部分转换，采用本地时间
	- date.toLocaleTimeString();
		显示为地方日期的格式

4. 日期对象中的日期
	- date.getYear();
		显示年份，不建议使用
	- date.getFullYear();
		四位数完整显示年份
	- date.getMonth();
		显示月份，0代表1月，11代表12月
	- date.getDate();
		显示一个月中的某一天
	- date.getDay();
		返回值为一周中的哪一天，周日为0

5. 日期对象中的时间
	- date.getHours()
		返回小时
	- date.getMinutes()
		返回分钟
	- date.getSeconds()
		返回秒钟
	- date.getMilliseconds()
		返回毫秒　
	- date.getTime()
		返回与1970年1月1日0时0分0秒间隔的毫秒数
	- date.getTimezoneOffset()
		返回日期对象中本地时间与UTC之间的时差数，单位为秒

		以上都为本地时间，如果是UTC时间，可以使用以下代码
	`date.getUTCHours();`
	`date.getUTCMinutes();`
	`date.getUTCSeconds();`
	`date.getUTCMilliseconds();`

6. 设置日期对象的日期
	- date.setYear(year);
		设置年份，该方法反对使用。
	- date.setFullYear(year, month, day)
		设置日期的年，月，日
	- date.setMonth(month, day)
		设置日期的月，日
	- date.setDate(day);
		设置日期的某一天，day为一月中的某一天

	如果要采用UTC时间
		date.setUTCFullYear(year, month, day);
		date.setUTCMonth(month, day);
		date.setUTCDate(day);

7. 设置日期对象的时间
	- date.setHours(hours, minutes, seconds, milliseconds)
	- date.setMinutes(minutes,seconds, milliseconds)
	- date.setSeconds(seconds, milliseconds)
	- date.setMilliseconds(milliseconds)
	如需采用UTC时间
		date.setUTCHours(hours, minutes, seconds)

8. 与毫秒相关的方法
	- date.setTime(milliseconds)
	- date.valueOf()
	- Date.Parse(str)
	- Date.UTC(year, month, day, hours, minutes, seconds, milliseconds)

#### 数字对象
1. 创建数字对象
	`new Number(value)`
	`Number(value)`
	如果省略new运算符，则把Number()当作一个转换函数来使用

2. 数字对象的属性
	- Number.Max\_VALUE 最大值:1.79e+308(大概)
	- Number.MIN\_VALUE 最小值:5e-324 (大概)
	- Number.NaN 
	- Number.POSITIVE\_INFINITY 正无穷大
	- Number.NEGATIVE\_INFINITY 负无穷大

3. 将数字对象转换成字符串
	- number.toString(radix)
		radix是进制，假设2，则先将数字转换成二进制
	- number.toLocaleString();
		转换为本地格式字符串
	- number.toExponential(digits)
		转换为科学计数法格式，digits取值0\~20
	- number.toFixed(digits)
		正常计数格式，digits取值为小数点后几位
	- number.toPrecision(precision)
		返回字符串中的有效位数，如小于整数部分，则采用科学计数

#### 数学对象
为数学计算提供常量和计算函数
1. 数学对象的属性
	- Math.E 代表自然对数的底数(e), 值近似于2.718
	- Math.LN10 代表10的自然对数（loge10），近似于2.3026
	- Math.LN2 代表2的自然对数(loge2), 近似于0.6931
	- Math.LOG10E 代表10为底e的对数(log10e),近似于0.4343
	- Math.LOG2E 代表2为底e的对数(log2e), 近似于1.4427
	- Math.PI 代表π, 近似于3.14159
	- Math.SQRT1\_2 代表2的平方根的倒数，近似于0.7071
	- Math.SQRT2 代表2的平方根，近似于1.414

2. 数学对象的方法
	没有构造函数，不能使用new，都是静态方法，直接使用
	- Math.abs(number) 返回number的绝对值　
	- Math.acos(number) 返回number的反余弦值，取值-1.0\~1.0
	- Math.asin(number) 返回反正弦值，取值-1.0\~1.0
	- Math.atan(number) 返回反正切值
	- Math.atan2(y,x) 返回X轴到座标x,y的角度
	- Math.ceil(number) 返回大于或等于number的最小整数
	- Math.cos(number) 返回余弦值
	- Math.exp(number) 返回e的number次幂
	- Math.floor(number) 返回小于或等于number的最大整数
	- Math.log(number) 返number的自然对数
	- Math.max(number1, number2, number3…) 返回列表中的最大值
	- Math.min(number1, number2, number3…) 返回列表中的最小值
	- Math.pow(x, y) 返回x的y次幂
	- Math.random()返回一个0.0\~1.0的随机数
	- Math.round(number) 返回number最近的整数
	- Math.sin(number) 返回正弦值
	- Math.sqrt(number) 返回平方根，必须大于或等于0，否则返回NaN
	- Math.tan(number) 返回number的正切值

#### 字符串对象
1. 创建字符串对象
		new String(str);
		String(str);

2. 字符串的长度
3. 查找字符串
	- string.charAt(index)
		返回字符串中的第index个字符，0\~string.length-1
	- string.charCodeAt(index)
		返回字符串中的index个字符的Unicode代码
	- string.indexOf(substring, startindex)
		返回子字符串substring在字符串中的第一次出现的位置。其中substring参数为要在字符串中查找的子字符串，startindex为可选参数，该参数用于指定查找字符串的位置，取值0\~string.length-1。如果没有指定startindex参数，则从字符串的第一个字符开始查找，相当于startindex值为0.如果字符串中包含子字符，则返回子字符串第一次出现在字符串中的位置，否则返回-1。
	- string.lastIndexOf(substring, startindex)
		和string.indexOf()相当，只是从最后开始查找
	- string.match(regexp)
		找到一个或多个正则表达式的匹配。
	- string.replace(regexp, replacetext)
		替换一个正则表达式匹配的字串
	- string.search(regexp)
		查找子字符在字符串中的个数
	- string.slice(startindex, endindex)
		返回一个子字符串，参数为开始位置和结束位置
	- string.substr(startindex, length)
		返回一个字符串
	- string.substring(startindex, endindex)
		返回一个字符串

	以上方法都不会改变原字符的内容，只会返回一个新字符串

	indexOf()与search()都可以返回子字符串在字符串中第一次出现的位置，但是indexOf()只是用于子字符串，search()还可以用于正则表达式

	slice(startindex, endindex)和substring(startindex,endindex)都返回从startindex到endindex的字符串，包含startindex, 不包含endindex

	slice()比substring()方法灵活，可以使用负数，substring()不可以使用负数

4. 转换大小写
	- string.toLocaleLowerCase()
	- string.toLowerCase()
	- string.toLocaleUpperCase()
	- string.toUpperCase()
5. 创建新的字符串
	`String.fromCharCode(value1, value2,…)`
	`string.concat(value1, value2…)`

	第一个方法是静态方法，由构造函数String()创建，而不是由字符串或字符串对象创建。value参数列表可以是0个或多个整数，这些整数代表了字符串中的字符Unicode编码

	第二个方法可以用来链接字符串，其中参数列表中为1个或多个字符串，该方法与使用`+`运算符类似

6.  其他方法
	`string.localeCompare(str)`
	用本地特定的顺序来比较两个字符串。
	\`string.split(regexp, limit)
	`将字符串分割为字符串数组, regexp参数用来指定用什么方式分割字符串,该参数可以是正则表达式，可以是字符串。limit参数可选，用于指定返回的数组的最大长度。`
	\``string.toString()`
	返回字符串对象中的字符串值
	`string.valueOf()`
	返回字符串对象中的字符串值

7. 非标准化方法
	- string.anchor(str): 相当于返回`<a name=str>string</a>`
	- string.big(): 相当于返回`<big>string</big>`
	- string.blink(): 相当于返回`<blink>string</blink>`
	- string.bold(): 相当于返回`<b>string</b>`
	- string.fixed(): `<tt>string</tt>`
	- string.fontcolor(str): `<font color=str>string</font>`
	- string.fongsize(str): `<font size=str>string</font>`
	- string.italics(): `<i>string</i>`
	- string.link(url): `<a href=str>string</a>`
	- string.small(): `<small>string</small>`
	- string.strike():`<strike>string</strike>`
	- string.sub(): `<sub>string</sub>`
	- string.sup(): `<sup>string</sup>`

#### 函数对象
JS函数既是一种基本的数据类型也是一个对象，因此函数拥有属于自己的属性与方法。
函数对象的属性:
- function.arguments 为当前执行的函数返回一个Arguments对象
- function.caller 调用当前函数的函数
- function.length 函数定义的参数个数
- function.prototype 引用原型对象
函数对象的方法:
- function.apply(name, args) 将函数作为一个对象的方法调用。name为对象名，args为参数数组
- function.call(name,value1,value2…) 将函数作为一个对象的方法调用哦哦那个。其中name为对象名，value等为参数
- function.toString() 返回函数的字符串表示

#### Error对象
JS代码出错时，JS的解释器就会抛出一个Error对象的实例
1. 接收抛出的Error对象实例 catch(ex){}
2. 创建Error对象
	- new Error()
	- new Error(message)
3. Error对象的属性
	- error.name 该属性为错误类型
	- error.message 该属性为错误信息
4. Error对象的方法
	`error.toString()`　

#### 其他对象
本章介绍了:
- Object对象
- Arguments对象
- 布尔对象
- 日期对象
- 数字对象
- 数学对象
- 字符串对象
- 函数对象
- Error对象

其他还有很多内置对象:
- 数组对象
- RegExp对象
- Window对象
- Navigator对象
- Screen对象
- Location对象
- History对象
- Document对象
- Form对象

## 第七章 数组
### 7.1 数组介绍
数组是一些数据集合，数组的数据都又一个编号，通过编号可以引用这些数据

#### 数组的概念
JS是无类型语言，所以数组内的每个元素类型可以是不相同的。数组中的元素类型可以是数字型，字符串型和布尔型，甚至也可以是一个数组

#### 数组元素
数组是数组元素(Element)的集合

#### 多维数组
JS不支持多维数组，但是JS中数组元素可以是任何类型的数据，包括数组
`arr[1][2]`

### 7.2 定义数组
#### 构造函数
	new Array()
	new Array(size)
	new Array(element1, element2...)

size: 数组元素的个数
element1, element2… 数组元素值的列表

#### 定义一个空数组

#### 通过指定数组长度定义数组

#### 通过指定数组元素定义数组

#### 直接定义数组

### 7.3 数组元素
#### 存取数组的元素
#### 添加数组元素
数组元素的个数是由数组的最大下标所决定的

#### 删除数组元素
数组元素一旦被定义不能被删除，只能删除其值

#### 数组元素的个数

	array.length

### 7.4 数组的方法
#### toString()方法： 将数组转换为字符串
#### join()方法: 将数组元素链接成字符串
	join();
	join(str);

#### push()方法: 在数组尾部添加元素
	push(value, ...)
返回值是添加元素后的长度

#### concat()方法 添加元素并生成新数组
concat()也是在数组后添加元素，但是会生成一个新数组
	concat(value1...)

#### unshift()方法: 在数组头部添加元素
	unshift(value...)

#### pop()方法 删除并返回数组的最后一个元素
#### shift()方法 删除并返回数组的第一个元素
#### splice()方法 删除，替换或插入数组元素
	splice(start, count, value,...)
start: 要删除，替换或插入数组元素的开始位置
count: 要删除，替换的数组元素的个数,可选
value: 要插入数组的值，
splice()返回值是一个数组

#### slice() 返回数组种的一部分
	slice(start, end)
slice()方法返回值也为一个数组，为原数组的一部分

#### reverse()方法: 颠倒数组中的元素
将数组元素颠倒, 会改变原数组的顺序

#### sort()方法: 将数组元素排序
	sort()
	sort(order)
会影响原数组的数据

#### toLocaleString()方法 转换为当地字符串
toString() 和 toLocaleString()

# 第二篇 实用篇
## 第八章JavaScript对象层次与事件处理
### 8.1 JavaScript的对象层次
JS中对象很多，这些并不是独立存在的，而是有层次结构的，对象可以依据层次来进行调用
#### 1. JS对象模型
对象模型是用来描述对象逻辑结构及其标准操作方法的一个接口（API）。
- JS语言核心部分:主要包括JS的数据类型，运算符和表达式
- 与数据类型相关的核心对象，主要包括一些与数据类型相关的内置对象，如布尔对象，日期对象，数学对象，数字对象和字符串对象
- 与浏览相关的对象: 主要包括window对象，Navigator对象和Location对象等
- 与文档相关的对象: 主要包括Document对象，Form对象和Image对象
#### 2. 客户端对象层次介绍
js中window对象表示一个浏览器窗口。
JS中window对象层级高于Document对象
	window.document.write("some thing")

如果要引用一些表单
	window.document.forms[1]
表单中还有一些表单元素,用到elements数组
`window.document.forms[0].elements[0]`
表单元素中也会存在一些属性,例如value属性
	window.docuemnt.forms[0].elements[0].value

#### 3. 浏览器对象模型
简称BOM(Brower Object Model),该对象模型提供了独立语内容的，与浏览器窗口进行交互的对象。

[浏览器对象模型URL][4]

Window对象是所有对象的顶级对象，所有对象都是该对象的子对象

Document对象又称为文档对象模型DOM(Document Object Model)

#### 4. 对象的引用
### 8.2 事件驱动与事件处理
#### 事件与事件驱动
通过事件来调用程序的方式称为事件驱动
#### 事件与处理代码关联
只要在对象的代码中添加一个属性即可 ex`onclick="clickButton`

#### 调用函数的事件
静态脚本不能够响应用户的事件，动态脚本定了事件处理程序的脚本，某个事件发生时，浏览器会自动调用事先定义好的事件处理程序。

#### 调用代码的事件
有的时候可以将响应的代码直接写在事件中
`<input type=“button” onclick=“alert(“您单击了按钮”)>`
#### 设置对象事件的方法
设置对象事件的方法有两种，分别为直接在HTML元素的属性中设置和在JS代码中设置
1. HTML元素中设置对象事件
	`<input type="button" onclick="btClick()">`
2. JS代码中设置对象事件　
		<script type="text/javascript">
		    function btClick () {
		      alert("你点击了一个按钮");
		    }
		    window.document.forms[0].elements[0].onclick = btClick;
		</script>
	JS代码中设置对象事件，不需要输入函数名后的括号，因为`()`是调用运算符，这回调用了函数中的代码
	还可以直接将function语句赋值给元素属性

#### 显式调用事件处理程序
事件并不一定是用户激发，也可以代码直接激发，达到显式调用事件处理程序的目的。
#### 事件处理程序的返回值
#### 事件与this运算符
this运算符代表的是函数内的对象本身
### 8.3 常用的事件
不同的对象产生的事件可能也有所不同

#### 浏览器与事件
事件是浏览器产生，而不是JS本身产生，所以不同浏览器，事件也有可能不同。

[HTML5中的事件][5]

#### 鼠标移动事件
鼠标移动事件包括鼠标一定(Mousemove), 鼠标离开对象(Mouseout), 鼠标移动到对象上(Mouseover)三种

#### 鼠标单击事件
- click
- dblclick
- mousedown
- mouseup
`mousedown`和`mouseup`右键也可以触发

#### 加载与卸载事件
- load
- unload
#### 得到焦点与失去焦点事件
- focus 得到焦点
- blur 失去焦点
HTML4中规定A, AREA, LABEL, INPUT, SELECT, TEXTAREA, BUTTON元素拥有onfocus属性和onblur属性

#### 键盘事件
- keydown 按下键盘
- keyup 释放键盘
- keypress 按下并释放键盘

#### 提交与重置事件
- submit
- reset
#### 选择与改变事件
- select 文本框中的文字被选择产生的事件
- change 文本框或下拉框中激活

## 第九章 窗口与框架
### 9.1 Window对象
window对象是一个全局对象，是所有对象的顶级对象。
#### Window对象介绍
Window对象可以控制窗口，可以控制窗口内容，可以控制框架之间的关系
#### Window对象的使用方法
	window.属性名
	window.方法名(参数列表)
Window对象，Document, Location, History, Screen对象等都属于客户端对象，这些对象不需要实例化，既不需要new运算符来创建的对象。只需要引用就可以了。
	window.alert("String");
	window.document.write("String");
现实使用重，JS允许字符串来给窗口命名。也可以使用关键字来代替某些特定窗口: `self`代替当前窗口， `parent`代替父级窗口
	parent.属性名

#### Window对象的属性
#### Window对象的方法

[属性列表][6]

#### Window对象的事件
- blur: 当窗口失去焦点时激发
- error: 执行JS代码产生错误时
- focus 窗口得到焦点时
- load 窗口文档完全加载时
- resize 调整窗口大小时
- unload 卸载网页时激发

### 9.2 Window对象事件
包括:
- blur
- error
- focus
- load
- move
- resize
- unload
#### 装载文档
load可以用于BODY或IMG元素中，BODY中只有加载完毕会激发

浏览器不同，加载顺序不一样

#### 卸载文档
unload
#### 得到焦点与失去焦点
- blur
- focus

#### 调整窗口大小
resize
#### 处理错误
error
可以传递以下三个参数给错误处理函数
- 详细的错误信息
- 产生错误网页的URL
- 产生错误的行数
**这三个返回值是按顺序的**　　

### 9.3 对话框
三种方式创造对话框
- 警告框
- 确认框
- 提示框
#### 警告框
	window.alert(message)
alert()中支持正则表达式，不支持HTMl代码

#### 确认框
	window.confirm(message)
confirm()方法还可以产生一个布尔类的返回值

#### 提示框
	window.prompt(message, defaulfText);
prompt()有可以输入文字的输入框
prompt()可以返回字符串类型的返回值

### 9.4 状态栏
window中的`defaultStatus`属性和`status`属性可以控制状态栏中的信息

#### 状态栏介绍
通常展示的信息有两种:
- 加载的文件和进度
- 超链接的URL
	  　　　
#### 默认状态栏信息
defaultStatus
#### 状态栏瞬间信息
hover的时候的URL信息就是瞬间信息，使用status属性

### 窗口操作

#### 新开窗口
	open()
1. open()方法的语法
		window.open(url, windowName, features, replace)
	- url 可选，空字符或null时，会新开空白窗口
	- windowName: 可选，新开窗口的名称
	- features: 字符串，描述新窗口的特征，可选
	- replace: 布尔值，只有windowName参数值为一个已经存在的窗口名称时才起作用，true则用url参数值来替代该窗口浏览历史的当前项，false,则该窗口浏览历史中创建一个新项

	**建议完整输入`window.open()`，防止和document的open()方法混淆**

2. 新开一个空白窗口
		window.open()
3. 新开一个有文档的窗口
	url不为空就可以
4. 新开一个命名窗口
	指定windowName()参数值
5. 设置新开窗口的特征
		feature = value
6. 设置浏览历史

#### 窗口名字　
#### 关闭窗口
	window.close()
1. 关闭自身窗口
2. 关闭JS代码创建的自身窗口
3. 关闭其他窗口
4. 判断窗口是否关闭
#### 窗口的引用
1. 新窗口中输入文字
2. 操作新打开窗口中的数据
3. 父级窗口的引用
		window.opener
**2， 3 调试不成功**　

#### 窗口聚焦
- 获得焦点
	window.focus()
	window对象名.focus()

- 失去焦点
	window.blur()
	window对象名.focus()

#### 滚动文档
- window.scroll(x, y)
	该方法可以将窗口中显示的文档滚动到指定的绝对位置
- window.scrollTo(x, y)
	建议使用scrollTo(),由1.2版本规定
- window.scrollBy(x, y)
	该方法可以将文档滚动到指定的相对位置上

#### 移动窗口
- window.moveTo(x, y)
- window.moveBy(x, y)

#### 调整窗口大小
- window.resizeTo(x, y)
- window.resizeBy(x, y)

### 9.6 超时与事件间隔
#### 延迟执行代码
使用`setTimeout()`方法可以延迟代码的执行时间
	window.setTimeout(code, delay)
- code:延迟执行的JS代码
- delay: 延迟事件，单位毫秒
#### 周期性执行代码
要反复执行代码，要使用`setInterval()`方法

	window.setInterval(code, interval);
	window.setInterval(function, interval, parameters);
- code: 要周期执行的代码
- interval: 执行代码的周期事件，单位毫秒
- function: 周期执行的函数
- parameters: function函数的参数列表
#### 停止周期性执行代码
	window.clearInterval(id)
clearInterval()根据该返回值`id`来决定停止哪个setInterval()方法

#### 取消延迟执行
	window.clearTimeout(id)

### 9.7 框架操作

JS中并不存在Frame对象，所谓的Frame对象只是Window对象的一个实例。该对象拥有Window对象的所有方法和属性及事件。

#### 框架介绍

#### 框架的数量
Window对象有一个frames属性，该属性是个数组，数组中的元素代表框架中包含的窗口。

#### 父窗口与子窗口
#### 窗口之间的关系
1. 框架关系中常用到的属性
	- self 代表当前窗口
	- parent 代表当前窗口的父级窗口
	- top 代表当前窗口的顶级窗口
2. 一个复杂的框架

3. 框架自身的引用
	以下三句的作用相同
		self.document.write()
		window.document.write()
		document.write()
4. 父窗口对子窗口的引用　
5. 子窗口对父窗口及其他窗口的引用
6. 对顶级窗口的引用

### 9.8 Window对象的子对象
包括Document, History, Location, Math, Navigator对象和Screen对象等
#### Document对象
HTML文档
#### History对象
窗口的浏览历史
#### Location对象　　
当前文档的URL
#### Math对象

#### Navigator对象
#### Screen对象
显示器信息

### 9.9 IE浏览器中的方法和属性
#### IE浏览器中的方法
1. navigate(url)
2. print()
#### IE浏览器中的属性
1. event
2. clientInformation
### 9.10 Netscape浏览器中的方法和属性
#### 方法
#### 属性
#### 事件　

## 第十章 屏幕对象与浏览器对象
### 10.1 屏幕对象
#### 屏幕对象的属性
Screen对象是一个JS自动创建的对象，描述客户端显示器的信息。是一个全局对象，只读。
- height
- width
- colorDepth
- availHeight
- availWidth
#### 客户端显示器屏幕分辨率
#### 客户端显示器屏幕的有效宽度和高度
#### 颜色深度
#### 综合应用
### 10.2 浏览器对象
Navigator对象也叫浏览器对象，包含了浏览器的整体信息。

#### 浏览器对象属性
Navigator对象的属性
- appName 浏览器名称
- appVersion 浏览器版本号
- userAgent 浏览器用于HTTP请求的用户代理头的值
- appCodeName 浏览器的代码名
- platform 运行浏览器的操作系统或硬件平台
IE支持的Navigator对象属性
- cookieEnabled 检查浏览器是否支持cookie
- systemLanguage 系统哦那个默认语言
- userLanguage 返回用户使用的语言
Netscape支持的Navigator对象属性
- cookieEnabled 
- language 返回浏览器中使用的默认语言
- mimeType 返回一个数组，数组中的元素代表浏览器支持的MIME类型
- plugins 返回一个数组，数组的元素代表浏览器已经安装的插件
#### 浏览器对象的子对象

[1]:	https://www.evernote.com/shard/s5/nl/545318/21405b6e-48b2-4dfa-a8f8-0f0b4d31f763/?csrfBusterToken=U%3D85226%3AP%3D%2F%3AE%3D14d41aa6063%3AS%3D18a649e9eb6f294c7d188c0db72f569e
[2]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
[3]:	https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators
[4]:	http://www.w3school.com.cn/js/js_window.asp
[5]:	http://www.w3school.com.cn/tags/html_ref_eventattributes.asp
[6]:	http://www.w3school.com.cn/jsref/dom_obj_window.asp