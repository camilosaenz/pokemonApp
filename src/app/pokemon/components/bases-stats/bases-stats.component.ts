import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-bases-stats',
  templateUrl: './bases-stats.component.html',
  styleUrls: ['./bases-stats.component.css'],
})
export class BasesStatsComponent implements OnInit {

@Input() pokemon: Pokemon[] = []

  constructor() {}

  ngOnInit(): void {}

  getType(list: any[]) {
    return list.filter((x) => x.slot === 1)[0]?.type.name;
  }
}
