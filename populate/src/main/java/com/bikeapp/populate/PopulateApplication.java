package com.bikeapp.populate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PopulateApplication {
	
	@Bean
    public CommandLineRunner springStart(Populate populate){
        return args -> {
            System.out.println("Sovellus on käynnistynyt");
            populate.init();
        };
    }

	public static void main(String[] args) {
		SpringApplication.run(PopulateApplication.class, args);
	}

}
