function myCounter() {
    // 将函数的counter属性+1并返回
    return myCounter.counter++;

  }
  // 初始化函数的counter属性值
myCounter.counter = 0;

for (var i = 0; i < 4; i++) {
  console.log(myCounter());
}
