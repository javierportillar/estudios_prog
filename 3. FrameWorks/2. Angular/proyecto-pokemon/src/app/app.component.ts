import { Component, OnInit } from '@angular/core';
import { ReqAPIService } from "./services/req-api.service";
import { PokeDataService } from "./services/poke-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
  ) { }
    
}
// getPokemonDetails(url: string) {
//   this.apiReq.getPokemonDetails(url).subscribe(data => {
//     console.log(data);
//     // Aquí puedes hacer lo que necesites con los detalles del Pokémon
//   });
// }
