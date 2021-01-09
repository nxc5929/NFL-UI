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

  max: number = 20;

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

  get cssFromSpread(){
    let points = this.spread.points;
    if(points < this.max * 0.25){
      return 'small';
    }else if(points < this.max * 0.65){
      return 'mid';
    }else{
      return 'long';
    }
  }

}
