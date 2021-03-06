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

  leftTeam: Team;//Home or Fav
  leftTeamCss: string;
  rightTeam: Team;
  rightTeamCss: String
  spread: Spread;
  picked: number;

  ngOnInit() {
    this.spread = this.pick.game.spread;
    this.leftTeam = this.pick.game.homeTeam;
    this.rightTeam = this.pick.game.awayTeam;

    if(this.pick.pick){
      this.updatePick(this.pick.pick);
    }else{
      this.picked = 0;
    }
  }

  updatePick(pick: Team){
    this.pick.pick = pick;
    if(pick.id == this.leftTeam.id){
      this.leftTeamCss = "picked";
      this.rightTeamCss = "";
    }else{
      this.leftTeamCss = "";
      this.rightTeamCss = "picked";
    }
  }

}
