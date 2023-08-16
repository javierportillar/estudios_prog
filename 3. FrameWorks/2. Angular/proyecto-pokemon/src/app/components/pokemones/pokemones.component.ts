import { Component } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent {
  pokemons: any[] = [];
  pokemon: any[] = [];
  constructor(
    private pokemData: PokeDataService,
  ) { }

  getAllPokemones() {
    this.pokemData.getPokemones().subscribe(data => {
      this.pokemons = data;
    });

  }
  ngOnInit(): void {
    this.getAllPokemones();
  }
  pokeDetail(pokemon: any) {
    const id = this.extractPokemonIdFromUrl(pokemon.url);
    if (id !== -1) {
      this.pokemData.getPokemon(id).subscribe(detail => {
        this.pokemon = detail;
        console.log(this.pokemon);
      });
    }
  }

  extractPokemonIdFromUrl(url: string): number {
    if (!url || typeof url !== 'string') {
      console.error('Invalid URL:', url);
      return -1;
    }

    const splitUrl = url.split('/');
    const id = splitUrl[splitUrl.length - 2];

    if (!id) {
      console.error('Unable to extract ID from URL:', url);
      return -1;
    }

    return +id;
  }

}
//   this.pokemData.getPokemon(pokemon.id).subscribe(detail => {
//       this.pokemon = detail;
//       console.log(this.pokemon);
//   });
// }