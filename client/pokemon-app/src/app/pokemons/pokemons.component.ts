import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons-service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonsService]
})
export class PokemonsComponent implements OnInit {

  pokemons: IPokemon[] = [];
  errorMessage: String;

  constructor(private pokemonService:PokemonsService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      pokemons => {this.pokemons = pokemons},
      error => this.errorMessage = <any>error
    );
  }

}
