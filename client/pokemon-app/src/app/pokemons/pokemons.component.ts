import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsService } from 'src/services/pokemons-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsComponent implements OnInit {

  //@Input() private pokemons: IPokemon[];
  //@Output() onCreatePokemon: EventEmitter<any> = new EventEmitter();
  private pokemons$: Observable<any[]>;

  constructor(private pokemonsService: PokemonsService) { 
    this.pokemons$ = this.pokemonsService.getPokemons();
    console.log(this.pokemons$);
  }

  ngOnInit() {
  }

  addPokemon(pokemon: IPokemon) {
    this.pokemonsService.createPokemon(pokemon);
    console.log(this.pokemons$);
  }

}
