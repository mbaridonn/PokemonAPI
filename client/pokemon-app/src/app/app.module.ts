import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPokemonDialogComponent, PokemonDialog } from './new-pokemon-dialog/new-pokemon-dialog.component';
import { FormsModule } from '@angular/forms';
import { PokemonsRepository } from 'src/repositories/pokemons-repository';
import { PokemonsService } from 'src/services/pokemons.service';
import { VotingComponent } from './voting/voting.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vote', component: VotingComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonsComponent,
    NewPokemonDialogComponent,
    PokemonDialog,
    VotingComponent,
    HomeComponent,
    LeaderboardComponent,
    SidenavComponent
  ],
  entryComponents: [NewPokemonDialogComponent, PokemonDialog],
  imports: [
    RouterModule.forRoot(appRoutes),
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
    FormsModule,
    MatTableModule,
    MatSortModule,
    RatingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [PokemonsRepository, PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
