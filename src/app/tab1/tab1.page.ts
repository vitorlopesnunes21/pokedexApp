import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  pokemons = [];

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokemons = this.pokeApiService.getPokeApi();
  }
}
