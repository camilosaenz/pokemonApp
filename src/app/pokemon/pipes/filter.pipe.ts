import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filter',
})
export class PipesFilter implements PipeTransform {
  transform(value: Pokemon[], args: any): Pokemon[] {
    const results = [];
    if (args === '') {
      return value;
    }
    for (const poke of value) {
      // const valor: any;
      if (poke.name.indexOf(args) > -1) {
        results.push(poke);
      }
      if (poke.id.toString().indexOf(args) > -1) {
        results.push(poke);
      }
    }
    return results;
  }
}
