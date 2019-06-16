import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent{

  @Input()
  pokemon: IPokemon;

}
