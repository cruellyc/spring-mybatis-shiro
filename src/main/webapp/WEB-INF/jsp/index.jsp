<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript"
	src="<%=basePath%>/html/pc/js/jquery-1.4.2.min.js"></script>
<title>Insert title here</title>
</head>
<body>
	helloJsp
	<hr>${user}
	<input type="button" id="logout" value="退出登录" />
</body>
<script type="text/javascript">
	$("#logout").click(function(){
		location.href="/mybooks/disp/sysUser/logout";
	});
</script>
</html>