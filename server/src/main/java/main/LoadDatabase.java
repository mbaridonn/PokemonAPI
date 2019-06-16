package main;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;
import main.model.Pokemon;
import main.repositories.PokemonRepository;

@Configuration
@Slf4j
class LoadDatabase {

  @Bean
  CommandLineRunner initDatabase(PokemonRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(new Pokemon("Charmander", "Fire")));
      log.info("Preloading " + repository.save(new Pokemon("Squirtle", "Water")));
      log.info("Preloading " + repository.save(new Pokemon("Bulbasaur", "Plant")));
    };
  }
}