import { Component } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent {
  id = [];
  pokemons: any[] = [];
  pokemon: any = {};
<<<<<<< HEAD
  pokemonId!: number;
  pokemonState=false;
=======
  pokemonState = false;
  favoritos: any[] = [];
  favoritosState = false;  // Nuevo estado para manejar el despliegue de la lista de favoritos

>>>>>>> vToge
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
    this.obtenerFavoritos();

  }
  togglePokeState() {
    this.pokemonState = !this.pokemonState;
  }
<<<<<<< HEAD
  pokeDetail(pokemon: any) { //Desde aquí hay que mandar id a pokemon-detail
    const id = this.extractPokemonIdFromUrl(pokemon.url);
    this.pokemonId = id;  // Asume que tienes una variable pokemonId en tu componente
    // this.pokemonId.
    console.log(this.pokemonId);
    this.pokemonState=true;
=======

  pokeDetail(pokemon: any) {
    console.log(pokemon);
    const id = this.extractPokemonIdFromUrl(pokemon.url);
    this.pokemonState = !this.pokemonState;
    // console.log(this.pokemonState);
    // console.log(id);
    if (id !== -1) {
      this.pokemData.getPokemon(id).subscribe(detail => {
        this.pokemon = detail;
        console.log(this.pokemon);
      });
    }
>>>>>>> vToge
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

  toggleFavoritosState() {
    this.favoritosState = !this.favoritosState;
  }
  agregarAFavoritos(pokemon: any) {
    console.log('Componente agregarAFavoritos', { pokemon },);
    const id = this.extractPokemonIdFromUrl(pokemon.url);
    this.pokemData.agregarPokemonAFavoritos(pokemon,id).subscribe(response => {
      console.log('Pokémon agregado a favoritos:', response);
    });
  }

  obtenerFavoritos() {
    this.pokemData.showPokeFav().subscribe(data => {
      this.favoritos = data.datos;
    });
  }

}
//   this.pokemData.getPokemon(pokemon.id).subscribe(detail => {
//       this.pokemon = detail;
//       console.log(this.pokemon);
//   });
// }
