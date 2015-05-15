function myFun() {
  if (myFun.caller == null) {
    console.log("顶层的调用<br>");
  } else {
    console.log("在函数内调用<br>");
  }
}

myFun();

function myFun1() {
  myFun();
}

myFun1();
