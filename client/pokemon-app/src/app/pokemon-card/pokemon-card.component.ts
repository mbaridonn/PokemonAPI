import { Component, Input, Output} from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons.service';
import { EventEmitter } from 'protractor';

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
  turn = {isEnded:false};

  votePokemon(){
    this.addTurnWon(this.pokemon);
    this.turn.isEnded = true;
  }

  addTurnWon(pokemon:IPokemon){
    pokemon.turnsWon = pokemon.turnsWon + 1;
  }

}
