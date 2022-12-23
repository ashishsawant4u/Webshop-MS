package com.webshopms.services;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.webshopms.dto.ProductDTO;


@Service(value = "productService")
public class ProductServiceImpl implements ProductService 
{
	RestTemplate restTemplate;
	
	public ProductServiceImpl(RestTemplateBuilder restTemplateBuilder) 
	{
		this.restTemplate = restTemplateBuilder.build();
	}
	
	@Value("${catalo.ms.search.product.url}")
	private String SEARCH_PRODUCT_URL;
	
	@Override
	public List<ProductDTO> searchProduct(String searchTerm) 
	{		   
		   ResponseEntity<List<ProductDTO>> responseEntity = 
				   restTemplate.exchange(SEARCH_PRODUCT_URL+searchTerm, HttpMethod.GET, null,new ParameterizedTypeReference<List<ProductDTO>>() {});
		   List<ProductDTO> data = responseEntity.getBody();
		   
		   Predicate<ProductDTO> prodfilter = (p) -> p.getCode().contains(searchTerm) || p.getName().contains(searchTerm)  || p.getDescription().contains(searchTerm);
		   
		   return data.stream().filter(prodfilter).collect(Collectors.toList());
	}
}
