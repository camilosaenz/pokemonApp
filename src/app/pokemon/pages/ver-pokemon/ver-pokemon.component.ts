import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.css'],
})
export class VerPokemonComponent implements OnInit {
  pokemon: Pokemon[] = [];
  value: number = 0;
  fortalezas: string[] = [];
  debilidades: string[] = [];
  inmune: string[] = [];
  ineficaz: string[] = [];
  tiposEfectivos: string[] = [];
  habilidades: string[] = [];
  isShowAbilitie: boolean = false;
  isShowDebilidad: boolean = false;
  isShowInmune: boolean = false;
  isShowIneficaz: boolean = false;


  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ name }) => {
      this.pokemonService.getPokemonByName(name).subscribe((pokemon) => {
        this.pokemon.push(pokemon);
        this.getFortalezas();
        this.getDebilidades();
        this.getInmune();
        this.getIneficaz();
        this.getAbilities();
      });
    });
  }

  getType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }

  change(value: number) {
    this.value = value / 10;
    return this.value;
  }

  getFortalezas() {
    for (let poke of this.pokemon) {
      for (let tipo of poke.types) {
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((fortaleza) => {
            fortaleza.damage_relations.double_damage_to.forEach((fort) => {
              if (!this.fortalezas.includes(fort.name)) {
                this.fortalezas.push(fort.name);
              }
              for (let i = 0; i < poke.types.length; i++) {
                if (this.fortalezas.includes(poke.types[i].type.name)) {
                  let valor = this.fortalezas.indexOf(poke.types[i].type.name);
                  this.fortalezas.splice(valor, 1);
                }
              }
            });
          });
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.double_damage_to.forEach((fort) => {
              for (let i = 0; i < poke.types.length; i++) {
                if (
                  this.fortalezas.includes(fort.name) &&
                  this.debilidades.includes(fort.name)
                ) {
                  let valorFuerte = this.fortalezas.indexOf(fort.name);
                  let velorDebil = this.debilidades.indexOf(fort.name);
                  this.fortalezas.splice(valorFuerte, 1);
                  this.debilidades.splice(velorDebil, 1);
                }
              }
            });
          });
      }
    }
  }

  getDebilidades() {
    for (let poke of this.pokemon) {
      for (let tipo of poke.types) {
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.double_damage_from.forEach((deb) => {
              if (!this.debilidades.includes(deb.name)) {
                this.debilidades.push(deb.name);
              } else {
                this.tiposEfectivos.push(deb.name);
              }
              for (let i = 0; i < poke.types.length; i++) {
                if (this.debilidades.includes(poke.types[i].type.name)) {
                  let valor = this.debilidades.indexOf(poke.types[i].type.name);
                  this.debilidades.splice(valor, 1);
                }
              }
            });
          });
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.double_damage_from.forEach((deb) => {
              for (let i = 0; i < poke.types.length; i++) {
                if (
                  this.fortalezas.includes(deb.name) &&
                  this.debilidades.includes(deb.name)
                ) {
                  let velorDebil = this.debilidades.indexOf(deb.name);
                  let velorFuerte = this.fortalezas.indexOf(deb.name);
                  this.debilidades.splice(velorDebil, 1);
                  this.fortalezas.splice(velorFuerte, 1);
                }
              }
            });
          });
      }
    }
  }

  getInmune() {
    for (let poke of this.pokemon) {
      for (let tipo of poke.types) {
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.no_damage_from.forEach((deb) => {
              if (!this.inmune.includes(deb.name)) {
                this.inmune.push(deb.name);
              }
              for (let i = 0; i < poke.types.length; i++) {
                if (this.inmune.includes(poke.types[i].type.name)) {
                  let valor = this.inmune.indexOf(poke.types[i].type.name);
                  this.inmune.splice(valor, 1);
                }
              }
            });
          });
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.no_damage_from.forEach((deb) => {
              for (let i = 0; i < poke.types.length; i++) {
                if (
                  this.debilidades.includes(deb.name) &&
                  this.inmune.includes(deb.name)
                ) {
                  let velorDebil = this.debilidades.indexOf(deb.name);
                  this.debilidades.splice(velorDebil, 1);
                }
              }
            });
          });
      }
    }
  }

  getIneficaz() {
    for (let poke of this.pokemon) {
      for (let tipo of poke.types) {
        this.pokemonService
          .getTypesByName(tipo.type.name)
          .subscribe((debilidad) => {
            debilidad.damage_relations.no_damage_to.forEach((deb) => {
              if (!this.ineficaz.includes(deb.name)) {
                this.ineficaz.push(deb.name);
              }
              for (let i = 0; i < poke.types.length; i++) {
                if (this.ineficaz.includes(poke.types[i].type.name)) {
                  let valor = this.inmune.indexOf(poke.types[i].type.name);
                  this.ineficaz.splice(valor, 1);
                }
              }
            });
          });
      }
    }
  }

  getAbilities() {
    for (let poke of this.pokemon) {
      for (let ability of poke.abilities) {
        this.pokemonService
          .getAbilitiesByName(ability.ability.name)
          .subscribe((habilidad) => {
            habilidad.effect_entries.forEach((abt) => {
              for (let i = 0; i < poke.abilities.length; i++) {
                if (
                  abt.language.name === 'en' &&
                  !this.habilidades.includes(abt.effect)
                ) {
                  this.habilidades.push(abt.effect);
                }
              }
            });
          });
      }
    }
  }

  mostrarHabilidad() {
    this.isShowAbilitie = !this.isShowAbilitie;
  }

  mostrarDebilidad() {
    this.isShowDebilidad = !this.isShowDebilidad;
  }

  mostrarInmunidad() {
    this.isShowInmune = !this.isShowInmune;
  }

  mostrarIneficaces() {
    this.isShowIneficaz = !this.isShowIneficaz;
  }
}
