<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>  
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>      
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>webshop</title>
<tags:scripts />
<script src="/js/productPage.js"></script>
</head>
<body class="container-fluid">

<tags:header />
<tags:toast/>

<div class="d-flex justify-content-center">
	<blockquote class="blockquote mb-0" id="prodct-msg-container"></blockquote>
</div>

<div class="d-flex justify-content-center">
	<div id="product-result-list"></div>
</div>

</body>
</html>