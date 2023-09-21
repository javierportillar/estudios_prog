import { Injectable } from '@angular/core';
import { ReqAPIService } from "./req-api.service";
import { Pokemon } from '../models/pokemon.model';  // Ajusta la ruta según sea necesario
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

  getPokemones(): Observable<Pokemon[]> {
    return this.apiReq.getPokeApi().pipe(
      map(data => {
        return data.results.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          url: pokemon.url
        }));
      })
    );
  }
  getPokemon(id: number): Observable<any> {
    let a= this.apiReq.getPokeDetails(id);
    // console.log(a);
    return a;
  }
  agregarPokemonAFavoritos(pokemon:any,id:number): Observable<any> {
    return this.apiReq.agregarAFavoritos(pokemon,id);
  }

  showPokeFav(): Observable<any> {
    return this.apiReq.obtenerFavoritos();
  }
}

// getPokemon(id: number): Observable<any> {
//   return this.apiReq.getPokeDetails(id);
// }
