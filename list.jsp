<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<title>Bookstore</title>
</head>
<body>
	<font size="5"><b>Bookstore List</b></font>
	<br>
	<br> &nbsp;
	<form action="../BookstoreServlet/create.jsp" method="GET">
		<button type="submit" name="action" value="create"
			class="btn btn-default" style="margin: 10px;">create</button>
			<Input type="hidden" name="action" value="create" />
	</form>

	<table class="table">
		<tr>
			<th>Name</th>
			<th>Zip</th>
			<th>Address</th>
			<th>Telephone</th>
			<th>Update</th>
			<th>Delete</th>
			<th>Book</th>
		</tr>
		<c:forEach items="${bookstores}" var="bookstores">
			<tr>
				<th><c:out value="${bookstores.getName()}"></c:out></th>
				<th><c:out value="${bookstores.getZip()}"></c:out></th>
				<th><c:out value="${bookstores.getAddress()}"></c:out></th>
				<th><c:out value="${bookstores.getTel()}"></c:out></th>
				<th><form action="../BookstoreServlet/update.jsp" method="post">
						<button type="submit" name="updateID"
							value="<c:out value="${bookstores.getStoreID()}" />"
							class="btn btn-default">update</button>
							<Input type="hidden" name="action" value="update" />
					</form></th>
				<th><form action="../BookstoreServlet/delete.jsp" method="post">
						<button type="submit" name="deleteID"
							value="<c:out value="${bookstores.getStoreID()}" />"
							class="btn btn-default">delete</button>
							<Input type="hidden" name="action" value="delete" />
					</form></th>
				<th><form action="../BookServlet/booklist.jsp" method="post">
						<button type="submit" name="openID"
							value="<c:out value="${bookstores.getStoreID()}" />"
							class="btn btn-default">Book</button>
					</form></th>
			</tr>
		</c:forEach>

	</table>

</body>

</html>