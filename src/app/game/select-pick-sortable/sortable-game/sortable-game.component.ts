import { Component, OnInit, Input } from '@angular/core';
import { Pick, Team } from 'src/services/game/pick-model';

@Component({
  selector: 'sortable-game',
  templateUrl: './sortable-game.component.html',
  styleUrls: ['./sortable-game.component.css']
})
export class SortableGameComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit() {}

}
