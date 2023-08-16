import { Injectable } from '@angular/core';
import { ReqAPIService } from "./req-api.service";
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  constructor(
    private apiReq: ReqAPIService,
  ) { }

  pokemons: any[] = []; // <-- Array para almacenar los datos de los Pokémon

  
  getPokemones(): Observable<any[]> {
    return this.apiReq.getPokeApi().pipe(
      map(data => {
        let pokemonsDetails: any[] = [];
        for (let pokemon of data.results) {
          this.apiReq.getPokeDetail(pokemon.url).subscribe(detallePokemon => {
            pokemonsDetails.push({
              name: pokemon.name,
              details: detallePokemon,
              image: detallePokemon.sprites.other.dream_world.front_default
            });
          });
        }
        return pokemonsDetails;
      })
    );
  }
}

// getPokemon(id: number): Observable<any> {
//   return this.apiReq.getPokeDetails(id);
// }