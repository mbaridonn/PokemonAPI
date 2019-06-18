import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PokemonsService } from 'src/services/pokemons-service';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsComponent } from '../pokemons/pokemons.component';

@Component({
  selector: 'app-new-pokemon-dialog',
  templateUrl: './new-pokemon-dialog.component.html',
  styleUrls: ['./new-pokemon-dialog.component.css']
})
export class NewPokemonDialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PokemonDialog);
  }

}

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.html',
})
export class PokemonDialog {

  pokemon: IPokemon = {
    name: "",
    type: "",
    photoURL: ""
  };

  constructor(private pokemonsComponent: PokemonsComponent) { }

  createPokemon() {
    this.pokemonsComponent.createPokemon(this.pokemon);
  }

}