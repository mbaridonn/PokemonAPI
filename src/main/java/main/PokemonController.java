package main;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Pokemon;

@RestController
class PokemonController {

  private final PokemonRepository repository;

  PokemonController(PokemonRepository repository) {
    this.repository = repository;
  }

  // Aggregate root

  @GetMapping("/pokemons")
  List<Pokemon> all() {
    return repository.findAll();
  }

  @PostMapping("/pokemons")
  Pokemon newPokemon(@RequestBody Pokemon newPokemon) {
    return repository.save(newPokemon);
  }

  // Single item

  @GetMapping("/pokemons/{id}")
  Pokemon one(@PathVariable Long id) {

    return repository.findById(id)
      .orElseThrow(() -> new PokemonNotFoundException(id));
  }

  @PutMapping("/pokemons/{id}")
  Pokemon replacePokemon(@RequestBody Pokemon newPokemon, @PathVariable Long id) {

    return repository.findById(id)
      .map(Pokemon -> {
        Pokemon.setName(newPokemon.getName());
        Pokemon.setType(newPokemon.getType());
        return repository.save(Pokemon);
      })
      .orElseGet(() -> {
        newPokemon.setId(id);
        return repository.save(newPokemon);
      });
  }

  @DeleteMapping("/pokemons/{id}")
  void deletePokemon(@PathVariable Long id) {
    repository.deleteById(id);
  }
}