<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert_result</title>
</head>
<body>
<h1>학성정보 입력 결과</h1>
<%
String abc = request.getParameter("mid");
String irum = request.getParameter("irum");
String pwd = request.getParameter("pwd");
String phone = request.getParameter("phone");
String address = request.getParameter("address");
String addressDetail = request.getParameter("address_detail");
%>
<ol>
   <li><%=abc %></li>
   <li><%=irum %></li>
   <li><%=pwd %></li>
   <li><%=phone %></li>
   <li><%=address %></li>
   <li><%=addressDetail %></li>
</ol>
</body>
</html>