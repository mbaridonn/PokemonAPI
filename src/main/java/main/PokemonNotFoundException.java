package main;

class PokemonNotFoundException extends RuntimeException {

	PokemonNotFoundException(Long id) {
	    super("Could not find pokemon " + id);
	  }
}