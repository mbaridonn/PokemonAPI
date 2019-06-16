package main.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Pokemon {

	private @Id @GeneratedValue Long id;
	private String name;
	private String type;
	
	Pokemon() {}
	
	public Pokemon(String name, String type) {
	    this.name = name;
	    this.type = type;
	  }

}
