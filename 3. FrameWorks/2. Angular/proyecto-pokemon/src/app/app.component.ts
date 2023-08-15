import { Component, OnInit } from '@angular/core';
import { ReqAPIService } from "./services/req-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiReq:ReqAPIService,
  ){}
  

  getPokemones() {
    this.apiReq.getPokeApi().subscribe(data => {
      // Itera sobre todos los resultados.
      for (let pokemon of data.results) {
        // Para cada Pokémon, obtiene los detalles.
        this.apiReq.getPokemonDetail(pokemon.url).subscribe(detallePokemon => {
          console.log('Nombre:', pokemon.name);
          console.log('Detalles del Pokemon:', detallePokemon);
          let img = detallePokemon.sprites.front_default;
          console.log(img);
          
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
