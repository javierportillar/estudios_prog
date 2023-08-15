import { Component, OnInit } from '@angular/core';
import { ReqAPIService } from "./services/req-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private apiReq: ReqAPIService,
  ) { }
  pokemons: any[] = [];  // <-- Array para almacenar los datos de los Pokémon

  getPokemones() {
    this.apiReq.getPokeApi().subscribe(data => {
      for (let pokemon of data.results) {
        this.apiReq.getPokemonDetail(pokemon.url).subscribe(detallePokemon => {
          let pokemonData = {
            name: pokemon.name,
            details: detallePokemon,
            image: detallePokemon.sprites.front_default
          };
          this.pokemons.push(pokemonData);
        });
      }
    });
  }
  ngOnInit(): void {
    this.getPokemones();
  }
}
// getPokemonDetails(url: string) {
//   this.apiReq.getPokemonDetails(url).subscribe(data => {
//     console.log(data);
//     // Aquí puedes hacer lo que necesites con los detalles del Pokémon
//   });
// }
