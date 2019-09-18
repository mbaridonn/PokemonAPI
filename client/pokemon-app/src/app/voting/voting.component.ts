import { Component, OnInit} from '@angular/core';
import { PokemonsService } from 'src/services/pokemons.service';
import { IPokemon } from 'src/model/ipokemon';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit{

  private pokemons: IPokemon[];
  private errorMessage: String;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getRandomPokemons().subscribe(
      pokemons => {this.pokemons = pokemons},
      error => this.errorMessage = <any>error
    );
  }

  endTurn(){
    this.pokemons.forEach(pokemon => {
      this.addTurnPlayed(pokemon);
      this.pokemonsService.modifyPokemon(pokemon);
    });
    location.reload(); //refresh page
  }

  get endTurnFunc(){
    return this.endTurn.bind(this);
  }

  addTurnPlayed(pokemon:IPokemon){
    pokemon.turnsPlayed = pokemon.turnsPlayed + 1;
  }

}
