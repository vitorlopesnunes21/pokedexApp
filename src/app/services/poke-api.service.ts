import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  pokemons: any[] = [];

  private index = 1;
  private readonly offset = 6;
  private totalPokemons = 905;

  constructor(private http: HttpClient) {}

  async getPokeDados() {
    await this.getPokeApi();
    return this.pokemons;
  }

  async getPokeApi() {
    if (this.index >= this.totalPokemons) {
      return;
    }
    for (let id = this.index; id < this.index + this.offset; id++) {
      await this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .toPromise()
        .then((data: any) => {
          if (data === null) {
            return;
          }
          this.pokemons[id - 1] = data;
        });
    }
    this.index += this.offset;
  }

  async getPokebyName(name: string) {

    let dataPoke;
    await this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .toPromise()
        .then((data: any) => {
         dataPoke = data;
        });
        return dataPoke;
  }

  async getFraqueza(type: string) {

    let dataPoke;
    await this.http
        .get(`https://pokeapi.co/api/v2/type/${type}`)
        .toPromise()
        .then((data: any) => {
         dataPoke = data.damage_relations.double_damage_from;
        });
        return dataPoke;
  }

  async getMetade(type: string) {

    let dataPoke;
    await this.http
        .get(`https://pokeapi.co/api/v2/type/${type}`)
        .toPromise()
        .then((data: any) => {
         dataPoke = data.damage_relations.half_damage_from;
        });
        return dataPoke;
  }

  async getNulo(type: string) {

    let dataPoke;
    await this.http
        .get(`https://pokeapi.co/api/v2/type/${type}`)
        .toPromise()
        .then((data: any) => {
         dataPoke = data.damage_relations.no_damage_from;
        });
        return dataPoke;
  }
}
