package main.exceptions;

public class PokemonNotFoundException extends RuntimeException {

	public PokemonNotFoundException(Long id) {
	    super("Could not find pokemon " + id);
	  }
}