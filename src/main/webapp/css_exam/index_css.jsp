<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>css_exam/index_css</title>
</head>
<body>
<%
   String inc="inc=./css_exam/index_css.jsp&";
%>
<h2>CSS Contents</h2>
<ul>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/background_image.html'>background_image.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/border.html'>border</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/box.html'>box</a></li> 
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/index_old.html'>index_old</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/index_old.html'>index_old</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/position.html'>position</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/position_2.html'>position_2</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/overflow.html'>overflow</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/visible.html'>visible</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/text.html'>test.html</a></li>
</ul>
</body>
</html>