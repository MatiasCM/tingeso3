package com.tingeso3.facilservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FacilServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FacilServiceApplication.class, args);
	}

}
