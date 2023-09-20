import { Component, OnInit, Input, DefaultIterableDiffer } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonId!: number;
  pokemon: any = {};
  pokemonState=false;
  constructor(private pokeDataService: PokeDataService) {
   }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    let pokemonState = false
    if (this.pokemonId !== -1) {
      this.pokeDataService.getPokemon(this.pokemonId).subscribe(detail => {
        console.log(detail);
        if(detail){
          pokemonState = true
          this.pokemon = detail;
          console.log(this.pokemon);
        }

      });
    }

  }
}
