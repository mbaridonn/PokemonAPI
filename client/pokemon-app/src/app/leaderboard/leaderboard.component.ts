import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  private pokemons: IPokemon[];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(
      pokemons => {this.pokemons = pokemons}
    );
  }

  getScore(pokemon: IPokemon){
    var score = pokemon.turnsWon / pokemon.turnsPlayed * 5; //score should be between 0 and 5 stars
    var score = score || 0; //fixes if it's Nan
    var scoreRounded = score.toFixed(2); //displays two decimals
    return scoreRounded || 0;
  }

}
