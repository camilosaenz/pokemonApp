import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { BasesStatsComponent } from './components/bases-stats/bases-stats.component';
import { InputPokemonComponent } from './components/input-pokemon/input-pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card.component';
import { PipesFilter } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    PokedexComponent,
    VerPokemonComponent,
    ColorComponent,
    InputPokemonComponent,
    BasesStatsComponent,
    CardPokemonComponent,
    PipesFilter,
  ],
  exports: [PokedexComponent, VerPokemonComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PokemonModule {}
