function myFun () {
  var arrLength = arguments.length;
  for (i = 0; i < arrLength; i++) {
    for(j = arrLength; j>1; j--){
      if(arguments[j] < arguments[j-1]){
        temp = arguments[j];
        arguments[j] = arguments[j-1];
        arguments[j-1] = temp;
      }
    }
  }
  for(i=0; i<arrLength; i++){
    document.write(arguments[i]+"<br>");
  }
}