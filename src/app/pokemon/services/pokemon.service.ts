import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../interfaces/pokedex.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Type } from '../interfaces/types.interface';
import { Ability } from '../interfaces/ability.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private typeUrl: string = 'https://pokeapi.co/api/v2/type';
  private abilityUrl: string = 'https://pokeapi.co/api/v2/ability';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokedex> {
    const url = `${this.apiUrl}?limit=898`;
    return this.http.get<Pokedex>(url);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    const url = `${this.apiUrl}/${name}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonByNameOrId(pokemon: string | number): Observable<Pokemon[]> {
    const url = `${this.apiUrl}/${pokemon}`;
    return this.http.get<Pokemon[]>(url);
  }

  getTypesByName(type: string): Observable<Type> {
    const url = `${(this, this.typeUrl)}/${type}`;
    return this.http.get<Type>(url);
  }

  getAbilitiesByName(ability: string): Observable<Ability> {
    const url = `${(this, this.abilityUrl)}/${ability}`;
    return this.http.get<Ability>(url);
  }
}
