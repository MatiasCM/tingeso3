package com.tingeso3.medioservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MedioServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedioServiceApplication.class, args);
	}

}
