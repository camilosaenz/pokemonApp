import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardPokemonComponent implements OnInit {
  value: number = 0;
  // termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() pokemon: Pokemon[] = [];
  @Input() termino: string = '';

  constructor() {}

  ngOnInit(): void {}

  getType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }

  change(value: number) {
    this.value = value / 10;
    return this.value;
  }
}
