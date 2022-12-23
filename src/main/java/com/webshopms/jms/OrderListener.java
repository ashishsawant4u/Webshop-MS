package com.webshopms.jms;

import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import com.webshopms.dto.OrderDto;

//@EnableJms
@Component
public class OrderListener {

//	 @JmsListener(destination = "mailbox", containerFactory = "myFactory")
//	  public void receiveMessage(OrderDto order) {
//	    System.out.println("Received <" + order.getOrderCode() + ">");
//	  }
	
}
