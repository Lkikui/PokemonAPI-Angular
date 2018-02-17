import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getPokemonWithAbility();
  }

  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    bulbasaur.subscribe(data => {
      var ability1 = data.abilities[0].ability.name;
      var ability2 = data.abilities[1].ability.name;
      console.log(`Bulbasaur's abilities are ${ability1} and ${ability2}.`);
    });
  }

  getPokemonWithAbility() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      var ability = data.abilities[0].ability;
      let abilityUrl = this._http.get(`${ability.url}`);
      abilityUrl.subscribe(abilityData => {
        let pokemonObj = abilityData.pokemon;
        console.log(`${pokemonObj.length} pokemon have the ${ability.name} ability.`)
      })
    })
  }

}
