package com.example.pokemons;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PokemonController {

	private final PokemonRepository repository;

	PokemonController(PokemonRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/pokemons")
	List<Pokemon> all() {
		return repository.findAll();
	}

	@PostMapping("/pokemons")
	Pokemon newPokemon(@RequestBody Pokemon newPokemon) {
		return repository.save(newPokemon);
	}

	@GetMapping("/pokemons/{id}")
	Pokemon one(@PathVariable Integer id) {

		return repository.findById(id).orElseThrow(() -> new PokemonNotFoundException(id));
	}

	@PutMapping("/pokemons/{id}")
	Pokemon replacePokemon(@RequestBody Pokemon newPokemon, @PathVariable Integer id) {

		return repository.findById(id).map(Pokemon -> {
			Pokemon.setName(newPokemon.getName());
			Pokemon.setType(newPokemon.getType());
			Pokemon.setPhotoURL(newPokemon.getPhotoURL());
			Pokemon.setTurnsPlayed(newPokemon.getTurnsPlayed());
			Pokemon.setTurnsWon(newPokemon.getTurnsWon());
			return repository.save(Pokemon);
		}).orElseGet(() -> {
			newPokemon.setId(id);
			return repository.save(newPokemon);
		});
	}

	@DeleteMapping("/pokemons/{id}")
	void deletePokemon(@PathVariable Integer id) {
		repository.deleteById(id);
	}
	
	//returns a list with two random pokemons
	@GetMapping("/randomPokemons")
	List<Pokemon> randomPokemons() {
		List<Pokemon> pokemons = repository.findAll();
		
		int pokemonId1 = this.generateRandom(pokemons.size());
		Pokemon pokemon1 = pokemons.get(pokemonId1 - 1);
		
		pokemons.remove(pokemonId1 - 1);
		
		int pokemonId2 = this.generateRandom(pokemons.size());
		Pokemon pokemon2 = pokemons.get(pokemonId2 - 1);
		
		List<Pokemon> randomPokemons = new ArrayList<Pokemon>();
		randomPokemons.add(pokemon1);
		randomPokemons.add(pokemon2);
		
		return randomPokemons;
	}
	
	

	
	private int generateRandom(int max) {
		Random random = new Random();
		int randomNumber = random.nextInt(max) + 1;
		return randomNumber;
	}
}
