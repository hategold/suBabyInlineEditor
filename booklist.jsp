<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="ex" uri="WEB-INF/custom.tld"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<title>Book</title>
</head>
<body>

	<font size="5"><a href="../BookstoreServlet/list.jsp"><c:out
				value="${bookstore.getName()}"></c:out></a> >>> <b>Book List</b></font>
	<br>
	<br> &nbsp;
	<form action="../BookServlet/create_book.jsp" method="GET">
		<c:set value="${storeID}" var="storeID" />
		<button type="submit" name="create"
			value="<c:out value="${bookstore.getStoreID()}" />"
			class="btn btn-default" style="margin: 10px;">create</button>
		<Input type="hidden" name="action" value="create" />
		<Input type="hidden" name="storeID" value="${bookstore.getStoreID()}" />
	</form>

	<sql:setDataSource var="count" driver="com.mysql.jdbc.Driver"
		url="jdbc:mysql://localhost/bookstore" user="root" password="flower" />
	<sql:query dataSource="${count}" var="count">
	SELECT COUNT(*) from bookstore.book where storeID = "${bookstore.getStoreID()}";
	</sql:query>

	<p align="right">
		<c:set value="${count.rowsByIndex[0][0]}" var="count" />
		<ex:count message="${count}" />
	</p>

	<table class="table">
		<tr>
			<th>Name</th>
			<th>Category</th>
			<th>Price</th>
			<th>Update</th>
			<th>Delete</th>

		</tr>
		<c:forEach items="${bookstore.getBooks()}" var="book">
			<tr>
				<th><c:out value="${book.getName()}"></c:out></th>
				<th><c:out value="${book.getCategory()}"></c:out></th>
				<th><c:out value="${book.getPrice()}"></c:out></th>
				<th><form action="../BookServlet/update_book.jsp" method="post">
						<button type="submit" name="updateID"
							value="<c:out value="${book.getBookID()}" />"
							class="btn btn-default">update</button>
						<Input type="hidden" name="action" value="update" />
					</form></th>
				<th><form action="../BookServlet/delete_book.jsp" method="post">
						<button type="submit" name="deleteID"
							value="<c:out value="${book.getBookID()}" />"
							class="btn btn-default">delete</button>
						<Input type="hidden" name="action" value="delete" />
					</form></th>

			</tr>
		</c:forEach>	
	</table>

</body>
</html>