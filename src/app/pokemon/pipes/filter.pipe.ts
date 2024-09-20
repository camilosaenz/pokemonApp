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
    
    const searchTerm = args.toString().toLowerCase();

    for (const poke of value) {
      if (poke.name.toLowerCase().indexOf(searchTerm) > -1) {
        results.push(poke);
      }
      if (poke.id.toString().indexOf(searchTerm) > -1) {
        results.push(poke);
      }
    }
    return results;
  }
}
