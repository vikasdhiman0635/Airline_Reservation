package com.echo.user.echo_user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class EchoUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(EchoUserApplication.class, args);
	}

}
