import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

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

  constructor() {}

}