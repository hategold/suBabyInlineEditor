<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="<c:out value="${pageContext.servletContext.contextPath}" />/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<title>Update Bookstore</title>
</head>
<body>
	<c:set value="${Entity}" var="book" />
	<font size="5"><b>Update Book</b></font>
	<div class="table-responsive ">

		<form method="post" action="update_book.jsp">
			<table class="table table-bordered">
				<tr>
					<th>Book</th>
					<th></th>
				</tr>
				<tr>
					<th>name</th>
					<th><input type="text" name="name" class="form-control"
						style="width: auto;" value="<c:out value="${book.getName()}"/>" required></th>
				</tr>
				<tr>
					<th>category</th>
					<th>
						<!--<input type="text" name="category"
						value="<c:out value="${book.getCategory()}"/>" required>   --> <select
						name="category" class="form-control" style="width: auto;">

							<c:forEach items="${category}" var="category">
								<c:choose>
									<c:when test="${category == book.getCategory()}">
										<option value="<c:out value="${category}"/>" selected>${category}</option>
									</c:when>
									<c:otherwise>
										<option value="<c:out value="${category}"/>">${category}</option>
									</c:otherwise>
								</c:choose>
							</c:forEach>

					</select>
					</th>
				</tr>
				<tr>
					<th>price</th>
					<th><input type="text" name="price" class="form-control"
						style="width: auto;" value="<c:out value="${book.getPrice()}"/>" required></th>
				</tr>
				<tr>
					<th></th>
					<th><button type="submit" name="checkUpdate"
							value="${book.getBookID()}" class="btn btn-default">Save</button>
						<button type="reset" value="Reset" class="btn btn-default">Reset</button></th>
						
				</tr>
			</table>
			<Input type="hidden" name="action" value="update" />
			<Input type="hidden" name="storeID" value="${book.getStoreID()}"/>
			<Input type="hidden" name="bookID" value="${book.getBookID()}"/>
		</form>
	</div>

</body>

<p>
	<c:set var="Message" value="${Message}" scope="request" />
	<c:out value="${Message}" />
</p>

<a href="./booklist.jsp?listBook=<c:out value="${book.getStoreID()}"/>">Go
	Back to list.</a>
</html>