<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript"
	src="<%=basePath%>/html/pc/js/jquery-1.4.2.min.js"></script>
<title>登录</title>
</head>
<body>
	错误信息：
	<h4 id="erro"></h4>
	<form>
		<p>
			账号：<input type="text" name="username" id="username"/>
		</p>
		<p>
			密码：<input type="password" name="password" id="password" />
		</p>
		<p>
			<input type="button" id="ajaxLogin" value="登录" />
		</p>
	</form>
</body>
<script>
	
	$("#ajaxLogin").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		$.post("/mybooks/disp/sysUser/ajaxLogin", {
			"username" : username,
			"password" : password
		}, function(result) {
			if (result.status == 200) {
				location.href = "/mybooks/disp/sysUser/index";
			} else {
				$("#erro").html(result.message);
			}
		});
	});
</script>
</html>