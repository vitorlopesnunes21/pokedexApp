import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public pokemons: any[] = [];
  public fraquezas: any[] = [];

  public valorSearch: string;
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

  async pesquisar(event) {
   if(this.valorSearch && this.valorSearch.trim( ) !== ''){
    console.log(await this.pokeApiService.getPokebyName(this.valorSearch));
   }
  }

  async pokeFraqueza(types){
    this.fraquezas=[];
    if (types[1]){
      for(const type of await this.pokeApiService.getFraqueza(types[0].type.name)){
        let verificacao = true;
        for(const aaa of await this.pokeApiService.getFraqueza(types[1].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        for(const aaa of await this.pokeApiService.getMetade(types[1].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        for(const aaa of await this.pokeApiService.getNulo(types[1].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        if(verificacao){
          this.fraquezas.push(type);
        }
      }

      for(const type of await this.pokeApiService.getFraqueza(types[1].type.name)){
        let verificacao = true;
        for(const aaa of await this.pokeApiService.getFraqueza(types[0].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        for(const aaa of await this.pokeApiService.getMetade(types[0].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        for(const aaa of await this.pokeApiService.getNulo(types[0].type.name)){
          if (aaa.name === type.name){
            verificacao = false;
          }
        }
        if(verificacao){
          this.fraquezas.push(type);
        }
      }
    }
    else {
      this.fraquezas.push(...( await this.pokeApiService.getFraqueza(types[0].type.name)));
    }
  }
}
