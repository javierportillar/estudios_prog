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
      mergeMap(data => {
        let requests = [];
        for (let pokemon of data.results) {
          requests.push(this.apiReq.getPokeDetail(pokemon.url).pipe(
            map(detail => ({
              name: pokemon.name,
              details: detail,
              image: detail.sprites.other.dream_world.front_default,
              id: detail.id,
            }))
          ));
        }
        return forkJoin(requests);
      })
    );
  }

  getPokemon(id: number): Observable<any> {
    return this.apiReq.getPokeDetails(id);
}
}
