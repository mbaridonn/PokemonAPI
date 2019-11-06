import { Component, OnInit, ViewChild } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  private pokemons: IPokemon[];
  private dataSource: MatTableDataSource<IPokemon>;
  private columnsToDisplay = ['name', 'type', 'turnsPlayed', 'turnsWon', 'score'];
  private active = true;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(
      pokemons => {
        this.pokemons = pokemons
        this.dataSource = new MatTableDataSource(this.pokemons);
        this.dataSource.sort;
      });
  }

  getScore(pokemon: IPokemon) {
    var score = pokemon.turnsWon / pokemon.turnsPlayed * 5; //score should be between 0 and 5 stars
    var score = score || 0; //fixes if it's Nan
    var scoreRounded = score.toFixed(2); //displays two decimals
    return scoreRounded || 0;
  }

}
