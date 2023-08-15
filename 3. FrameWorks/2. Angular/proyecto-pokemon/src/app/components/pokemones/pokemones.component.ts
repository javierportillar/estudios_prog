import { Component } from '@angular/core';
import { PokeDataService } from "../../services/poke-data.service";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent{
  pokemons: any[] = [];
  constructor(
    private pokemData:PokeDataService,
  ){}
  getPokemones(){
    this.pokemData.getPokemones().subscribe(data => {
      this.pokemons = data;      
    });
    console.log();
    
  }
  ngOnInit(): void {
    this.getPokemones();
  }
}
