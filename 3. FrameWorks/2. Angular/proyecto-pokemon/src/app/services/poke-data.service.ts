import { Injectable, OnInit } from '@angular/core';
import { ReqAPIService } from "./req-api.service";
import { Observable, map } from 'rxjs';

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
          this.apiReq.getPokeDetail(pokemon.url)
            .subscribe(detallePokemon => {
              pokemonsDetails.push({
                name: detallePokemon.name,
                details: detallePokemon,
                image: detallePokemon.sprites.other.dream_world.front_default,
                id: detallePokemon.id,
              });
            });
        }
        return pokemonsDetails;
      })
    );

  }
}
/* 
import { Injectable } from '@angular/core';
import { ReqAPIService } from "./req-api.service";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  constructor(private apiReq: ReqAPIService) {}

  getPokemones(): Observable<any[]> {
    return this.apiReq.getPokeApi().pipe(
      map(data => {
        let pokemonsDetails: any[] = [];
        for (let pokemon of data.results) {
          this.apiReq.getPokemonDetail(pokemon.url).subscribe(detallePokemon => {
            pokemonsDetails.push({
              name: pokemon.name,
              details: detallePokemon,
              image: detallePokemon.sprites.front_default
            });
          });
        }
        return pokemonsDetails;
      })
    );
  }
}
*/
