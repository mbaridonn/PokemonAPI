package main;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Pokemon;

interface PokemonRepository extends JpaRepository<Pokemon, Long> {

}
