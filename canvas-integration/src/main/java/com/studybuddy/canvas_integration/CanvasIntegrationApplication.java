package com.studybuddy.canvas_integration;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@RestController
public class CanvasIntegrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(CanvasIntegrationApplication.class, args);
	}

	@GetMapping
	public List<String> hello() {
		return List.of("hello", "world");
	}
	

}
