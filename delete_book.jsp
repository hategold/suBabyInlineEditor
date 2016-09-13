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
<title>Delete Book</title>
</head>
<body>
	<c:set value="${Entity}" var="book" />
	<font size="5"><b>Delete Book</b></font>
	<div class="table-responsive">
		<form method="post" action="delete_book.jsp">
			<table class="table table-bordered">
				<tr>
					<th>Book</th>
					<th></th>
				</tr>
				<tr>
					<th>name</th>
					<th><c:out value="${book.getName()}" /> <%
     
 %></th>
				</tr>
				<tr>
					<th>category</th>
					<th><c:out value="${book.getCategory()}" /> <%
     
 %></th>
				</tr>
				<tr>
					<th>price</th>
					<th><c:out value="${book.getPrice()}" /> <%
     
 %></th>
				</tr>

				<tr>
					<th></th>
					<th><button type="submit" name="checkDelete"
							value="<c:out value="${book.getBookID()}"/>"
							class="btn btn-default"
							onclick="return confirm('Are you sure?');">Delete</button>
				</tr>
			</table>
			<Input type="hidden" name="storeID" value="<c:out value="${book.getStoreID()}" />" />
			<input type="hidden" name="action" value="delete">
		</form>
	</div>
	<p>
		<c:set var="Message" value="${Message}" scope="request" />
		<c:out value="${Message}" />
	</p>
</body>
<!-- revise book.getStoreID to storeID. reason: when delete a book, all data will disappear -->
<a href="./booklist.jsp?listBook=<c:out value="${book.getStoreID()}"/>">Go
	Back to list.</a>
</html>