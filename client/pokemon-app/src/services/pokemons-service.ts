import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { IPokemon } from "src/model/ipokemon";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonUrl = "http://localhost:8080/pokemons";
  private pokemons: IPokemon[];

  constructor(private http: HttpClient) {
    this.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  getPokemons(): Observable<IPokemon[]> {
    if (this.pokemons) {
      return of(this.pokemons);
    } else {
      return this.http.get<IPokemon[]>(this.pokemonUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
  }

  addPokemon(pokemon: IPokemon) {
    this.pokemons.push(pokemon);
    this.http.post(this.pokemonUrl, pokemon).subscribe(
      success => { },
      error => { this.handleError(error) }
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}