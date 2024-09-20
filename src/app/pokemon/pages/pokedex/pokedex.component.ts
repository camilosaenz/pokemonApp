import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[] = [];
  termino: string | number = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      (resp) => {
        resp.results.forEach((result) => {
          this.pokemonService.getPokemonByName(result.name).subscribe(
            (pokemon) => {
              this.pokedex.push(pokemon);
              this.sortPokedexById();
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sortPokedexById() {
    this.pokedex.sort((a, b) => a.id - b.id);
  }

  getType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }

  buscar(termino: string) {
    this.termino = termino;
    this.pokemonService.getPokemonByNameOrId(termino).subscribe(
      (pokemon) => {
        this.pokedex = pokemon;
        this.sortPokedexById();
      },
      (err) => {
        this.pokedex = [];
      }
    );
  }
}
