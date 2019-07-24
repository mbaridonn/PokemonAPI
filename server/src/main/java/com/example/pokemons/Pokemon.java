package com.example.pokemons;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pokemon {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;
	private String type;
	private String photoURL;
	private Integer turnsPlayed;
	private Integer turnsWon;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getPhotoURL() {
		return photoURL;
	}
	
	public void setPhotoURL(String photoURL) {
		this.photoURL = photoURL;
	}

	public Integer getTurnsPlayed() {
		return turnsPlayed;
	}

	public void setTurnsPlayed(Integer turnsPlayed) {
		this.turnsPlayed = turnsPlayed;
	}

	public Integer getTurnsWon() {
		return turnsWon;
	}

	public void setTurnsWon(Integer turnsWon) {
		this.turnsWon = turnsWon;
	}
	
}
