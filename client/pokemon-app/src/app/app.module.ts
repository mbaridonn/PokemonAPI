import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPokemonDialogComponent, PokemonDialog } from './new-pokemon-dialog/new-pokemon-dialog.component';
import { FormsModule } from '@angular/forms';
import { PokemonsRepository } from 'src/repositories/pokemons-repository';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonsComponent,
    NewPokemonDialogComponent,
    PokemonDialog
  ],
  entryComponents: [NewPokemonDialogComponent, PokemonDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [PokemonsComponent, PokemonsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
