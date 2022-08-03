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

  getPokeDados() {
    this.getPokeApi();
    return this.pokemons;
  }

  async getPokeApi() {
    if(this.index >= this.totalPokemons){
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
}
