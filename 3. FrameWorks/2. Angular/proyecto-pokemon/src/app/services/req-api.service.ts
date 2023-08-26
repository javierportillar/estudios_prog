import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqAPIService {
  constructor(
    private http: HttpClient
  ) { }

  apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

  getPokeApi(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokeDetail(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  getPokeDetails(id: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // console.log(this.http.get<any>(url));
    return this.http.get<any>(url);
  }
  obtenerDetallesPokemon(url: string): Observable<any> {
  return this.http.get(url);
}
agregarAFavoritos(pokemon: any): Observable<any> {
  const url = 'http://localhost:3000/favoritos'; // Reemplaza 'TU_API_URL' con la URL de tu API
  return this.http.post(url, pokemon);
}
actualizarPokemonFavorito(pokemon: any): Observable<any> {
  const url = `http://localhost:3000/favoritos/${pokemon.id}`; // Reemplaza 'TU_API_URL' con la URL de tu API
  return this.http.patch(url, pokemon);
}
}
// getPokeDetails(id: number): Observable<number> {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return this.http.get<any>(url);
// }
