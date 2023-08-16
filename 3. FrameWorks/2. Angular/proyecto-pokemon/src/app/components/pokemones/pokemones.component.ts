import { Component } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent{
  pokemons: any[] = [];
  pokemon:any[] =[];
  constructor(
    private pokemData:PokeDataService,
  ){}

  getAllPokemones(){
    this.pokemData.getPokemones().subscribe(data => {
      this.pokemons = data;
    });
    
  }
  ngOnInit(): void {
    this.getAllPokemones();
  }
  pokeDetail(pokemon: any) {}
  
}
//   this.pokemData.getPokemon(pokemon.id).subscribe(detail => {
//       this.pokemon = detail;
//       console.log(this.pokemon);
//   });
// }