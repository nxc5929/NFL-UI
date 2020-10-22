import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team, Spread, Pick, Game } from 'src/services/game/pick-model';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'game-spread',
  templateUrl: './game-spread.component.html',
  styleUrls: ['./game-spread.component.css']
})
export class GameSpreadComponent implements OnInit {

  constructor() { }

  @Input() game: Game;

  homeTeam: Team;
  awayTeam: Team;
  spreadFavTeamId: number;
  spreadPicked: number;

  ngOnInit() {
    this.homeTeam = this.game.homeTeam;
    this.awayTeam = this.game.awayTeam;
    var spread = this.game.spread;
    if (spread) {
      this.spreadPicked = spread.points;
      this.spreadFavTeamId = spread.favTeam.id
    } else {
      this.game.spread = new Spread(0, null, 0);
      this.spreadPicked = 0;
    }
  }

  updateFavorite(teamId: number) {
    if (teamId) {
      this.game.spread.favTeam = (teamId == this.homeTeam.id) ? this.homeTeam : this.awayTeam;
    }
  }

  updatePoints(points: number) {
    this.game.spread.points = points;
  }

}
