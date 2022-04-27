<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>html/index_html</title>
</head>
<body>
<%
   String inc="inc=./html/index_html.jsp&";
%>
<h1>HTML Contents</h1>
<ul>
  <li><a href='index.jsp?<%=inc%>inc2=./html/font.html'>font.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/h.html'>h.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/paragraph.html'>paragraph.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./anchor.html'>anchor.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./test.html'>test.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/form.html'>form.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/list.html'>list.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./member/insert.html'>회원정보 입력(insert.html)</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./member/view.html'>회원정보보기(view.html)</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/media.html'>media.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/table.html'>table.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./html/form.html'>form.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./css_exam/declare.html'>declare.html</a></li>
  <li><a href='index.jsp?<%=inc%>inc2=./score/insert.html'>score_insert.html</a></li>
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