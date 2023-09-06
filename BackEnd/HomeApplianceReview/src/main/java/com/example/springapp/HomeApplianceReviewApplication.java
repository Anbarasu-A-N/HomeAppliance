package com.example.springapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HomeApplianceReviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeApplianceReviewApplication.class, args);
	}

}
