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
    	log.info("Preloading " + repository.save(new Pokemon("Bulbasaur", "Plant", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Ivysaur", "Plant", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Venusaur", "Plant", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Charmander", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Charmeleon", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Charizard", "Fire", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Squirtle", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Wartortle", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png")));
    	log.info("Preloading " + repository.save(new Pokemon("Blastoise", "Water", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png")));
      
    };
  }
}