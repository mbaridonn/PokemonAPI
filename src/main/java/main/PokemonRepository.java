package main;

import org.springframework.data.jpa.repository.JpaRepository;

interface PokemonRepository extends JpaRepository<Pokemon, Long> {

}
