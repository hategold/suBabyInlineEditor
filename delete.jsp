<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Delete Bookstore</title>
</head>
<body>
	<c:set value="${Entity}" var="bookstore" />
	<font size="5"><b>Delete Bookstore</b></font>
	<div class="table-responsive">
		<form method="post" action="delete.jsp">
			<table class="table table-bordered">
				<tr>
					<th>Bookstore</th>
					<th></th>
				</tr>
				<tr>
					<th>name</th>
					<th><c:out value="${bookstore.getName()}" /></th>
				</tr>
				<tr>
					<th>zip</th>
					<th><c:out value="${bookstore.getZip()}" /></th>
				</tr>
				<tr>
					<th>address</th>
					<th><c:out value="${bookstore.getAddress()}" /></th>
				</tr>
				<tr>
					<th>telephone</th>
					<th><c:out value="${bookstore.getTel()}" /></th>
				</tr>
				<tr>
					<th></th>
					<th><button type="submit" name="checkDelete"
							value="<c:out value="${bookstore.getStoreID()}"/>"
							class="btn btn-default"
							onclick="return confirm('Are you sure?');">Delete</button>
				</tr>
			</table>
				<Input type="hidden" name="action" value="delete" />
		</form>
	</div>
	<p>
		<c:set var="Message" value="${Message}" scope="request" />
		<c:out value="${Message}" />
	</p>
</body>

<a href="list.jsp">Go Back to list.</a>
</html>