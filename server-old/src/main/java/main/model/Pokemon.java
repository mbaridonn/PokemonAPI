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
	private String photoURL;
	
	Pokemon() {}
	
	public Pokemon(String name, String type, String photoURL) {
	    this.name = name;
	    this.type = type;
	    this.photoURL = photoURL;
	  }

}
