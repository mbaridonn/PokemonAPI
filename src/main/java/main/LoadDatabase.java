package main;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;
import model.Pokemon;

@Configuration
@Slf4j
class LoadDatabase {

  @Bean
  CommandLineRunner initDatabase(PokemonRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(new Pokemon("Charmander", "fire")));
      log.info("Preloading " + repository.save(new Pokemon("Squirtle", "water")));
      log.info("Preloading " + repository.save(new Pokemon("Bulbasaur", "plant")));
    };
  }
}