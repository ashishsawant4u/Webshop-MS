package com.webshopms.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.webshopms.dto.OrderDto;
import com.webshopms.dto.ProductDTO;
import com.webshopms.services.ProductService;

import jakarta.annotation.Resource;


@RequestMapping("/webshop/products")
@Controller
public class ProductPageController 
{
	Logger log = LoggerFactory.getLogger(ProductPageController.class);
	
	@Resource(name = "productService")
	ProductService productService;
	
	JmsTemplate jmsTemplate;
	
	public ProductPageController(JmsTemplate jmsTemplate) 
	{
			this.jmsTemplate = jmsTemplate;
	}

	@GetMapping
	public String getProuctsPage()
	{
		return "productPage";
	}
	
	@GetMapping(value = "/search/{searchTerm}")
	public ResponseEntity<List<ProductDTO>> searchProducts(@PathVariable("searchTerm") String searchTerm)
	{
		return new ResponseEntity<>(productService.searchProduct(searchTerm),HttpStatus.OK);
	}
	
	@PostMapping(value = "/placeOrder")
	public ResponseEntity placeOrder(@RequestBody List<String> productCodes)
	{
		log.info("placing order with "+productCodes);
		jmsTemplate.convertAndSend("mailbox", new OrderDto("238472092",productCodes,"james.green@gmail.com"));
		return new ResponseEntity(HttpStatus.CREATED);
	}
}
