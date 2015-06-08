<html>
  <head>
    <title>列表</title>
  </head>
  <body style="margin:0px">
    <select name="section" id="">
      <%
        listName = trim(request("listName"))
        if listNme=0 then
      %>
      <option>1.1  脚本语言的介绍</option>
      <option>1.2  JavaScript的作用</option>
      <option>1.3  JavaScript的版本与支持</option>
      <%
        elseif listName = 1 then
      %>
      <option>2.1  常量</option>
      <option>2.2  变量</option>
      <option>2.3  数据类型</option>
      <%
        elseif listname = 2 then
      %>
      <option>3.1  表达式</option>
      <option>3.2  操作数</option>
      <option>3.3  运算符介绍</option>
      <%
        end if
      %>
    </select>
  </body>
</html>