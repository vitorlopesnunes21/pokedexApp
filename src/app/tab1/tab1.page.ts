import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public pokemons: any[] = [];

  private loading = false;

  constructor(private pokeApiService: PokeApiService) {}

  async ngOnInit() {
    this.getPokemons();
  }

  async getPokemons() {
    this.pokemons = await this.pokeApiService.getPokeDados();
  }

  async loadData(event) {

    if (this.loading === true) {
      return;
    }
    this.loading = true;
    await this.getPokemons();
    this.loading = false;
    event.target.complete();
  }
}
