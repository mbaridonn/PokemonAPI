import { Observable, BehaviorSubject } from "rxjs";
import { IPokemon } from "src/model/ipokemon";
import { Injectable } from '@angular/core';
import { PokemonsService } from "src/services/pokemons.service";

export const DUMMY_DATA = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Plant',
    photoURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    turnsPlayed: 15,
    turnsWon: 5
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'Plant',
    photoURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    turnsPlayed: 15,
    turnsWon: 5
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'Plant',
    photoURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    turnsPlayed: 15,
    turnsWon: 5
  }
];

@Injectable({
  providedIn: 'root'
})
export class PokemonsRepository {
  private pokemonsSubject = new BehaviorSubject([]);
  private pokemons: IPokemon[];

  constructor(private pokemonsService: PokemonsService) { 
    //this.loadDummyData();
    this.loadFromAPI();
  }

  getPokemons(): Observable<IPokemon[]> {
    return this.pokemonsSubject.asObservable();
  }

  private refresh() {
    this.pokemonsSubject.next(this.pokemons);
  }

  createPokemon(pokemon: IPokemon) {
    this.pokemonsService.createPokemon(pokemon);
    this.pokemons = [...this.pokemons, pokemon];
    this.refresh();
  }

  loadDummyData() {
    this.pokemons = DUMMY_DATA;
    this.refresh();
  }

  loadFromAPI(){
    this.pokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
      this.refresh();
    });
  }

}