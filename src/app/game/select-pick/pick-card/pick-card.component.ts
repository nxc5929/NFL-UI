import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team, Spread, Pick } from 'src/services/game/pick-model';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.css']
})
export class PickCardComponent implements OnInit {

  constructor() { }

  @Input() pick: Pick;
  @Input() sortable: boolean = false;

  homeTeam: Team;
  awayTeam: Team;
  spread: Spread;
  picked: number;

  ngOnInit() {
    this.homeTeam = this.pick.game.homeTeam;
    this.awayTeam = this.pick.game.awayTeam;
    this.spread = this.pick.game.spread;
    if(this.pick.pick){
      this.picked = this.pick.pick.id;
    }else{
      this.picked = 0;
    }
  }

  updatePick(event:MatRadioChange){
    this.pick.pick = (event.value == this.homeTeam.id) ? this.homeTeam : this.awayTeam;
    console.log(this.pick);
  }

}
