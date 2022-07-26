import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokeDados() {}

  async getPokeApi() {
    // eslint-disable-next-line prefer-const
    let pokemons = [];

    for (let id = 1; id <= 905; id++) {
      await this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .toPromise().then((data: any) => pokemons[id-1] = data);
    }
    return pokemons;
  }
}
