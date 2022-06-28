import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  pokemons: any = [
    {
      id: 10,
      name: 'caterpie',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      types: ['bug']
    },
    {
      id: 570,
      name: 'zorua',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
      types: ['dark']
    },
    {
      id: 149,
      name: 'dragonite',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
      types: ['dragon', 'flying']
    },
    {
      id: 25,
      name: 'pikachu',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      types: ['electric']
    },
    {
      id: 36,
      name: 'clefable',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
      types: ['fairy']
    },
    {
      id: 68,
      name: 'machamp',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
      types: ['fighting']
    },
    {
      id: 6,
      name: 'charizard',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['fire', 'flying']
    },
    {
      id: 641,
      name: 'thornadus',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png',
      types: ['flying']
    },
    {
      id: 94,
      name: 'gengar',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
      types: ['ghost', 'poison']
    },
    {
      id: 1,
      name: 'bulbasaur',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['grass', 'poison']
    },
    {
      id: 112,
      name: 'rhydon',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
      types: ['ground', 'rock']
    },
    {
      id: 364,
      name: 'sealeo',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
      types: ['ice', 'water']
    },
    {
      id: 143,
      name: 'snorlax',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
      types: ['normal']
    },
    {
      id: 454,
      name: 'toxicroak',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
      types: ['poison', 'fighting']
    },
    {
      id: 65,
      name: 'alakazam',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
      types: ['psychic']
    },
    {
      id: 74,
      name: 'geodude',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
      types: ['rock', 'ground']
    },
    {
      id: 797,
      name: 'celesteela',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png',
      types: ['steel', 'flying']
    },
    {
      id: 8,
      name: 'wartortle',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      types: ['water']
    }
  ];

  constructor() {}

}
