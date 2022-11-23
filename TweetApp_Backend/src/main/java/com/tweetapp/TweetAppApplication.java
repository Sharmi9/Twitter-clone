package com.tweetapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
public class TweetAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TweetAppApplication.class, args);
	}


//	@Bean
//	public Docket docket(){
//		return new Docket(DocumentationType.SWAGGER_2).select().build();
//	}

	@Bean
	Docket configSwagger() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.ant("/api/v1.0/**"))
				.apis(RequestHandlerSelectors.basePackage("com.tweetapp"))
				.build()
				.apiInfo(new ApiInfo(
						"TweetApp Rest API",
						"Our Rest API for Users",
						"1.0.0",
						"www.terms.publicis.com",
						new Contact("Sharmila", "www.publicis.com", "sharmila@publicis.com"),
						"Standard API License",
						"www.publicis.com",
						Collections.emptyList()
				));
	}

}
