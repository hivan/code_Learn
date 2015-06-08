
<%|
  listName = trim(request("listName"))|
  if listName=0 then|
%>|
1.1  脚本语言的介绍|1.2  JavaScript的作用|1.3  JavaScript的版本与支持
<%
  elseif listName=1 then
%>
2.1  常量|2.2  变量|2.3  数据类型
<%
  elseif listName=2 then
%>
3.1  表达式|3.2  操作数|3.3  运算符介绍
<%
  end if
%>
