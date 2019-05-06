package main;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {

}
