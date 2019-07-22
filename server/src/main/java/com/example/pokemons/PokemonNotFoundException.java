package com.example.pokemons;

public class PokemonNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PokemonNotFoundException(Integer id) {
	    super("Could not find pokemon " + id);
	  }
}
