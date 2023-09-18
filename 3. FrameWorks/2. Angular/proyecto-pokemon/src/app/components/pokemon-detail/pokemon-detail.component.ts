import { Component, OnInit, Input } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonId!: number;
  pokemon: any = {};

  constructor(private pokeDataService: PokeDataService) {
   }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    if (this.pokemonId !== -1) {
      this.pokeDataService.getPokemon(this.pokemonId).subscribe(detail => {
        this.pokemon = detail;
      });
    }
  }
}
