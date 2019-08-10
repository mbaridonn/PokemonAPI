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
  errorMessage: String;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getRandomPokemons().subscribe(
      pokemons => {this.pokemons = pokemons},
      error => this.errorMessage = <any>error
    );
  }

}
