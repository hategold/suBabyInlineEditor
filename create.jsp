<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<title>Create Bookstore</title>
</head>
<body>
	<font size="5"><b>Create Bookstore</b></font>
	<div class="table-responsive ">
		<form method="post" action="../BookstoreServlet/create.jsp">
			<table class="table table-bordered">
				<tr>
					<th>Bookstore</th>
					<th></th>
				</tr>
				<tr>
					<th>name</th>
					<th><input type="text" name="name" required></th>
				</tr>
				<tr>
					<th>zip</th>
					<th><input type="text" name="zip" required></th>
				</tr>
				<tr>
					<th>address</th>
					<th><input type="text" name="address" required></th>
				</tr>
				<tr>
					<th>telephone</th>
					<th><input type="text" name="tel" ></th>
				</tr>
				<tr>
					<th></th>
					<th><button type="submit" name="checkCreate" value="createStore"
							class="btn btn-default">Save</button>
						<button type="reset" value="Reset" class="btn btn-default">Reset</button></th>
				
				</tr>
			</table>
			<Input type="hidden" name="action" value="create" />
		</form>
	</div>
	<p>
		<c:set var="Message" value="${Message}" scope="request" />
		<c:out value="${Message}" />
	</p>
</body>
<a href="./list.jsp">Go Back to list.</a>
</html>