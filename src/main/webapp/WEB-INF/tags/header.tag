<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>  

<spring:url var="logoUrl" value="/images/webshop-logo.png" />


<nav class="navbar navbar-expand-lg navbar-light bg-light bg-gradient mb-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">webshop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex justify-content-center w-50" id="search-container">
	    <div class="input-group">
			  <input type="text" id="productSearchText" class="form-control" placeholder="search products" aria-label="search products" aria-describedby="searchBtn">
			  <button class="btn btn-dark" type="button" id="productSearchBtn">
			  		 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
						  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
						</svg>
			  </button>
		</div>
	</div>
	<div>
		<button type="button" class="btn btn-primary position-relative" id="placeOrderBtn">
		  Place Order
		  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
		  	<span id="cartCount"></span>
		    <span class="visually-hidden">unread messages</span>
		  </span>
		</button>
	</div>
  </div>
</nav>
