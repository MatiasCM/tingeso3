package com.tingeso3.dificilservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class DificilServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DificilServiceApplication.class, args);
	}

}
