package tests;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

import main.PokemonApplication;
import main.model.Pokemon;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = PokemonApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class PokemonControllerTests {
	
	@Autowired
    private MockMvc mvc;
	
	@Test
	public void getPokemons() throws Exception {
	 
	    Pokemon charmander = new Pokemon("Charmander","fire");
	    Pokemon squirtle = new Pokemon("Squirtle","water");
	    Pokemon bulbasaur = new Pokemon("Bulbasaur","plant");
	 
	    mvc.perform(get("/pokemons")
	      .contentType(MediaType.APPLICATION_JSON))
	      .andExpect(status().isOk())
	      .andExpect(content()
	      .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	      .andExpect(jsonPath("$[0].name", is(charmander.getName())))
	      .andExpect(jsonPath("$[1].name", is(squirtle.getName())))
	      .andExpect(jsonPath("$[2].name", is(bulbasaur.getName())));
	}
	
	@Test
	public void postPokemon() throws Exception {
		
		Pokemon pikachu = new Pokemon("Pikachu", "electric");
		byte[] pikachuJson = toJson(pikachu);
		
		mvc.perform(post("/pokemons")
				.content(pikachuJson)
				.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().is2xxSuccessful()); //should be 201?
	}
	
	private byte[] toJson(Object r) throws Exception {
        ObjectMapper map = new ObjectMapper();
        return map.writeValueAsString(r).getBytes();
    }
	
}
