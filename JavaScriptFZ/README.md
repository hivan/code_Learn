
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
	new Date();
	new Date(str);
	new Date(year,month, day, hours, minutes, seconds, milliseconds);
	new Date(milliseconds);

- str: 表示日期的字符串
- year: 代表年份的数据
- month: 代表月份的数据
- day: 代表日期的数据
- hours: 代表小时的数据
- minutes: 代表分钟的数据
- seconds: 代表秒钟的数据
- milliseconds: 代表毫秒的数据
- milliseconds1: 代表距离1970年1月1日0点时的毫秒数　


[1]:	https://www.evernote.com/shard/s5/nl/545318/21405b6e-48b2-4dfa-a8f8-0f0b4d31f763/?csrfBusterToken=U%3D85226%3AP%3D%2F%3AE%3D14d41aa6063%3AS%3D18a649e9eb6f294c7d188c0db72f569e
[2]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
[3]:	https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators