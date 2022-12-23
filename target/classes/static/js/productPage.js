$( document ).ready(function() {
	searchHandler();
	
	addToCart();
	
	placeOrder();
	
	let cartProducts = JSON.parse(localStorage.getItem("cart-items"));
	$('#cartCount').html((undefined === cartProducts || null === cartProducts) ? 0 : cartProducts.length);
	
	$('#productSearchText').keyup(function(e){
	    if(e.keyCode == 13)
	    {
	        $('#productSearchBtn').trigger("click");
	    }
	});
});

function placeOrder()
{
	$( document ).on("click", "#placeOrderBtn", function(){
			let cartProducts = JSON.parse(localStorage.getItem("cart-items"));
			if(undefined !== cartProducts || null !== cartProducts)
			{
				$.ajax({
			       type: "POST",
			       contentType : 'application/json;',
			       url: "http://localhost:8042/webshop/products/placeOrder",
			       data: JSON.stringify(cartProducts), 
			       success :function(response) {
			       		console.log('place order success '+response);
			       		localStorage.removeItem("cart-items");
			       		$('#cartCount').html(0);
			       			$('#toast-msg .toast-body').html('Thank You For Placing order !');
			       			$("#toast-msg").removeClass('bg-success').addClass('bg-primary');
							$("#toast-msg").toast("show");
			       },
			       error :function(err) {
			       		console.log('error'+err);
			       }
  			 });
			}
	});
}

function addToCart()
{
	$( document ).on("click", ".add-to-cart-btn", function(){
		
		let cartProducts = JSON.parse(localStorage.getItem("cart-items"));
		if(undefined === cartProducts || null === cartProducts)
		{
			let products = [];
			products[0] = $(this).attr("data-productcode")	
			localStorage.setItem("cart-items", JSON.stringify(products));
			$('#cartCount').html(1);
		}
		else
		{
			cartProducts[cartProducts.length] = $(this).attr("data-productcode");
			localStorage.setItem("cart-items", JSON.stringify(cartProducts));
			$('#cartCount').html(cartProducts.length);
		}
		
		$("#toast-msg").addClass('bg-success').removeClass('bg-primary');
		$('#toast-msg .toast-body').html($(this).attr("data-productcode")+' added to cart !');
		$("#toast-msg").toast("show");
		
	});
}

function searchHandler()
{
	$( document ).on("click", "#productSearchBtn", function(){
		 let serchTerm = $('#productSearchText').val();
		 if(serchTerm!== '' && null!==serchTerm && undefined !== serchTerm)
		 {
			 $.ajax({
			       type: "GET",
				   url: "http://localhost:8042/webshop/products/search/"+serchTerm,
			       success :function(response) {
			       		console.log('/search success '+response);
			       		$('#product-result-list').empty();
			       		$('#prodct-msg-container').empty();
			       		if(undefined!== response && response.length > 0)
			       		{  
						$('<p>Products '+response.length+' found</p>').appendTo('#prodct-msg-container');
						}
						else
						{
							$('<p>No proucts found...try different search term...</p>').appendTo('#prodct-msg-container');
						}
			       		let ulElement = '<ul class="list-group list-group-horizontal" id="product-result-list-index">';
						let row = 0;
						for (var prodIndex = 0; prodIndex < response.length; prodIndex++)
						{
							let prod = response[prodIndex];
							
							
							if(prodIndex === 0  || prodIndex %3 === 0)
							{
								row ++;
								$('<div class="row" id="prod-row-'+row+'"></div>').appendTo('#product-result-list');
							}
							
							$('<div class="card p-0" style="width: 18rem;" id="prod-card-'+prodIndex+'"></div>').appendTo('#prod-row-'+row);
							//$('<img src="" class="card-img-top" alt="'+prod.code+'">').appendTo('#prod-card-'+prodIndex);
							$('<span class="badge bg-dark">'+prod.code+'</span>').appendTo('#prod-card-'+prodIndex);
							$('<div class="card-body" id="prod-card-body-'+prodIndex+'"></div>').appendTo('#prod-card-'+prodIndex);
							$('<h5 class="card-title">'+prod.name+'</h5>').appendTo('#prod-card-body-'+prodIndex);
							$('<p class="card-text">'+prod.description+'</p>').appendTo('#prod-card-body-'+prodIndex);
							$('<a href="#" data-productcode='+prod.code+' class="add-to-cart-btn btn btn-primary">Add to cart</a>').appendTo('#prod-card-body-'+prodIndex);
							
						
						}
			       },
			       error :function(err) {
			       		console.log('error',err);
			       }
  			 });
		 }
		  
	});	
}