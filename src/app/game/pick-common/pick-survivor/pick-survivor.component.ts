import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team, Pick } from 'src/services/game/pick-model';

@Component({
  selector: 'pick-survivor',
  templateUrl: './pick-survivor.component.html',
  styleUrls: ['./pick-survivor.component.css']
})
export class PickSurvivorComponent implements OnInit {

  teams: Team[] = [];

  @Input()
  set games(games: Pick[]) {
    if (games) {
      games.forEach(gameObj => {
        this.teams.push(gameObj.game.homeTeam);
        this.teams.push(gameObj.game.awayTeam);
      });
      this.teams.sort((a, b) => a.teamName.localeCompare(b.teamName));
    }
  }

  @Input() survivor: Team;
  @Output() onChange: EventEmitter<Team> = new EventEmitter();


  constructor() { }

  ngOnInit() { }

}
