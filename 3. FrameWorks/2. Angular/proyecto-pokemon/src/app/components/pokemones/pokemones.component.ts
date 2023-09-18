import { Component } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent {
  pokemons: any[] = [];
  pokemon: any = {};
  pokemonId!: number;
  pokemonState=false;
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
  togglePokeState(){
    this.pokemonState=!this.pokemonState;
  }
  pokeDetail(pokemon: any) {
    const id = this.extractPokemonIdFromUrl(pokemon.url);
    this.pokemonId = id;  // Asume que tienes una variable pokemonId en tu componente
  }

  extractPokemonIdFromUrl(url: string): number {
    if (!url || typeof url !== 'string') {
      console.log('Invalid URL:', url);
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

  // En PokemonesComponent

agregarAFavoritos(pokemon: any) {
  console.log('Componente agregarAFavoritos',{pokemon});

  this.pokemData.agregarPokemonAFavoritos(pokemon).subscribe(response => {
    console.log('Pokémon agregado a favoritos:', response);
  });
}

mostrarFormularioEdicion(pokemon: any) {
  // Aquí puedes mostrar un formulario para editar la información del Pokémon
  // Una vez que el usuario haya realizado los cambios y enviado el formulario, llama al siguiente método:
  this.actualizarInfoPokemon(pokemon);
}

actualizarInfoPokemon(pokemon: any) {
  this.pokemData.actualizarInfoPokemonFavorito(pokemon).subscribe(response => {
    console.log('Información del Pokémon actualizada:', response);
  });
}

}
//   this.pokemData.getPokemon(pokemon.id).subscribe(detail => {
//       this.pokemon = detail;
//       console.log(this.pokemon);
//   });
// }
