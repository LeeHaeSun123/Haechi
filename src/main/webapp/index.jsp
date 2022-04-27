<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
<link rel='stylesheet' type='text/css'
   href='./css/index4.css'>
   
</head>
<body>

<% /* java, jsp 영역임(스트립틀릿:scriptlet) */
String inc= "html/index_html.jsp";
String inc2= "html/font.html";

if(request.getParameter("inc") != null){
   inc=request.getParameter("inc");
}
if(request.getParameter("inc2") !=null){
	inc2=request.getParameter("inc2");
}
%>

<div class='main'>
   <header class='header'>
      <div>
         <ul>
           <li>
              <a href='index.jsp?inc=html/index_html.jsp'>HTML</a>           
           </li>
           <li>
              <a href='index.jsp?inc=css_exam/index_css.jsp'>CSS</a>
           </li>
           <li><a href=''>JAVASCRIPT</a></li>
           <li><a href=''>DB</a></li>
           <li><a href=''>JAVA</a></li>
           <li><a href=''>JSP</a></li>
           <li><a href=''>SERVLET</a></li>
           <li><a href=''>MYBATIS</a></li>      
         </ul>
      </div>
   </header>
   
   <div class='center'>
      <nav class='memu'>        
         <jsp:include page="<%=inc%>"/>        
      </nav>
      
      <div class='content'>
         <jsp:include page="<%=inc2%>"/>
      </div>
      
      <aside class='aside'>
      </aside>
   </div>

   <footer class='footer'></footer>
  
 
</div>
</body>
</html>