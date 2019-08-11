import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { IPokemon } from 'src/model/ipokemon';
import { PokemonsRepository } from 'src/repositories/pokemons-repository';

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
    photoURL: "",
    turnsPlayed: 0,
    turnsWon: 0
  };

  constructor(private pokemonsRepository: PokemonsRepository) { }

  createPokemon() {
    this.pokemonsRepository.createPokemon(this.pokemon);
  }

}