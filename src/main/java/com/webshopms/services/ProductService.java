package com.webshopms.services;

import java.util.List;

import com.webshopms.dto.ProductDTO;



public interface ProductService 
{
	public List<ProductDTO> searchProduct(String searchTerm);
}
