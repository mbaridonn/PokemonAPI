import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons-service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  private pokemons: IPokemon[];
  errorMessage: String;

  constructor(private pokemonsService:PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(
      pokemons => {this.pokemons = pokemons},
      error => this.errorMessage = <any>error,
    );
  }

  addPokemon(pokemon: IPokemon){
    //test
    console.log("ABAJO");
    this.pokemonsService.getPokemons().subscribe(pokemons =>
      {console.log(pokemons);});
  }

}
