import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PokemonsService } from 'src/services/pokemons.service';
import { IPokemon } from 'src/model/ipokemon';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit, OnChanges {

  private pokemons: IPokemon[];
  private errorMessage: String;
  private turn = {isEnded:false}; //refactor to use two way binding between components

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
    console.log("Turn Ended!");
    console.log("Valor de isEnded: " + this.turn.isEnded);
    //location.reload(); //refresh page
  }

  prueba(){
    this.endTurn();
  }

  addTurnPlayed(pokemon:IPokemon){
    pokemon.turnsPlayed = pokemon.turnsPlayed + 1;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Changes:");
    console.log(changes['this.turn.isEnded'].currentValue);
    if(changes['this.turn.isEnded'].currentValue){
      console.log("Changes!");
    }
  }

}
