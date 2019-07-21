package main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import main.model.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {

}
