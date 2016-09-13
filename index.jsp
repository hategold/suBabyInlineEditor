<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Bookstore In-line Editor</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.servletContext.contextPath}/bootstrap-3.3.5-dist/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.servletContext.contextPath}/bootstrap-3.3.5-dist/css/bootstrap-theme.css">
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/Book.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/Bookstore.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/prototype.js"></script>
	<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/Controller.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/App.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/AjaxUtil.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/TableBuilder.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/model.js"></script>

<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/UiChangeMode.js"></script>
<script language="javascript"
	src="${pageContext.servletContext.contextPath}/js/DomUtils.js"></script>
</head>

<!-- listBookstore --- bookstore controller/manager  not in ajax -->
<body onload='Controller.listBookstore()'>
	<h1>Bookstore</h1>
	<div align="center"></div>
	<div id="BookstoreDiv"></div>
	<h1><label id="storeName"></label></h1>

	<div id="BookDiv"></div>
	<input type="hidden" id="storeID" value="" />
	<input type="hidden" id="bookID" value="" />
</body>
</html>