import { Injectable } from '@angular/core';
import { IPokemon } from 'src/model/ipokemon';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonUrl = "http://localhost:8080/pokemons";
  private randomPokemonsUrl = "http://localhost:8080/randomPokemons";

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this.pokemonUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createPokemon(pokemon: IPokemon) {
    this.http.post(this.pokemonUrl, pokemon).subscribe(
      success => { },
      error => { this.handleError(error) }
    );
  }

  getRandomPokemons(): Observable<IPokemon[]>{
    return this.http.get<IPokemon[]>(this.randomPokemonsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
