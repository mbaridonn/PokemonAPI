import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private pokemons$: Observable<any[]>;

  constructor(private pokemonsService: PokemonsService) { 
    this.pokemons$ = this.pokemonsService.getPokemons();
  }

  ngOnInit() {
  }

  createPokemon(pokemon: IPokemon) {
    this.pokemonsService.createPokemon(pokemon);
  }

}
