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
  apiUrl='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  getPokeApi(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
}
  getPokeDetail(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}

//   getPokemonDetails(url: string){
//     return this.http.get<any>(`${this.apiUrl}`);
// }