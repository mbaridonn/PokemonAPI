import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonsRepository } from 'src/repositories/pokemons-repository';
import { IPokemon } from 'src/model/ipokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  private pokemons$: Observable<IPokemon[]>;

  constructor(private pokemonsRepository: PokemonsRepository) {
    this.pokemons$ = this.pokemonsRepository.getPokemons();
  }

}
