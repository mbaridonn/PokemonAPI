import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent{

  constructor(private pokemonsService:PokemonsService){}

  @Input()
  pokemon: IPokemon;

  @Input()
  votingEnabled = false;

  @Input()
  endTurn: Function;

  votePokemon(){
    this.addTurnWon(this.pokemon);
    this.endTurn();
  }

  addTurnWon(pokemon:IPokemon){
    pokemon.turnsWon = pokemon.turnsWon + 1;
  }

}
