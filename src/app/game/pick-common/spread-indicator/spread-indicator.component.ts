import { Component, OnInit, Input } from '@angular/core';
import { Team, Spread } from 'src/services/game/pick-model';

@Component({
  selector: 'spread-indicator',
  templateUrl: './spread-indicator.component.html',
  styleUrls: ['./spread-indicator.component.css']
})
export class SpreadIndicatorComponent implements OnInit {

  constructor() { }

  @Input() leftTeam: Team;
  @Input() rightTeam: Team;
  @Input() spread: Spread;

  ngOnInit() {
  }

  get leftSpread(){
    return this.leftTeam.id == this.spread.favTeam.id;
  }

  get leftValue() {
    return this.leftTeam.id == this.spread.favTeam.id ? this.spread.points : 0;
  }

  get rightValue() {
    return this.rightTeam.id == this.spread.favTeam.id ? this.spread.points : 0;
  }

}
