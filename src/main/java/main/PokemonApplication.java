package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan("model")
@SpringBootApplication
public class PokemonApplication {

	public static void main(String... args) {
	    SpringApplication.run(PokemonApplication.class, args);
	  }
}
