import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-input-pokemon',
  templateUrl: './input-pokemon.component.html',
  styleUrls: ['./input-pokemon.component.css'],
})
export class InputPokemonComponent implements OnInit {
  value: number = 0;
  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() pokemon: Pokemon[] = [];

  constructor() {}

  ngOnInit() {}

  getType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }

  change(value: number) {
    this.value = value / 10;
    return this.value;
  }
}
