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
<title>Create Book</title>
</head>
<body>
	<font size="5"><b>Create Book</b></font>
	<div class="table-responsive ">
		<c:set value="${Entity}" var="book" />
		<form method="post" action="../BookServlet/create_book.jsp">
			<table class="table table-bordered">
				<tr>
					<th>Book</th>
					<th></th>
				</tr>
				<tr>
					<th>name</th>
					<th><input type="text" name="name" class="form-control"
						style="width: auto;" required></th>
				</tr>
				<tr>
					<th>category</th>
					<th>
						<!-- <input type="text" name="category" required> --> <select
						name="category" class="form-control" style="width: auto;">
							<c:forEach items="${category}" var="category">
								<option value="<c:out value="${category}"/>">${category}</option>
							</c:forEach>
					</select>

					</th>
				</tr>
				<tr>
					<th>price</th>
					<th><input type="text" name="price" class="form-control"
						style="width: auto;" required></th>
				</tr>
				<tr>
					<th></th>
					<th><button type="submit" name="checkCreate"
							value="${book.getStoreID()}" class="btn btn-default">Save</button>
						<button type="reset" value="Reset" class="btn btn-default">Reset</button></th>

				</tr>
			</table>
			<input type="hidden" name="action" value="create" /> 
			<input type="hidden" name="storeID" value="${book.getStoreID()}" /> 
		</form>
	</div>

	<p>

		<c:set var="Message" value="${Message}" scope="request" />
		<c:out value="${Message}" />
	</p>
	<a href="./booklist.jsp?listBook=<c:out value="${book.getStoreID()}"/>">Go
		Back to list.</a>

</body>
</html>