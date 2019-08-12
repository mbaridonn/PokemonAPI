import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/services/pokemons.service';
import { IPokemon } from 'src/model/ipokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

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
    //location.reload(); //refresh page
  }

  prueba(){
    console.log(this.turn.isEnded);
    this.pokemons.forEach(pokemon=>{console.log(pokemon.turnsWon)});
    this.endTurn();
  }

  addTurnPlayed(pokemon:IPokemon){
    pokemon.turnsPlayed = pokemon.turnsPlayed + 1;
  }

}
