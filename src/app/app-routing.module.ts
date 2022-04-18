import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokemon/pages/pokedex/pokedex.component';
import { VerPokemonComponent } from './pokemon/pages/ver-pokemon/ver-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: 'pokemon/:name',
    component: VerPokemonComponent,
  },
  {
    path: '**',
    redirectTo: 'PokedexComponent',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
