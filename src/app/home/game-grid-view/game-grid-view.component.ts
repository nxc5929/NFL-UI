import { Component, OnInit, Input } from '@angular/core';
import { Pick, Game, Team } from 'src/services/game/pick-model';
import { WinnerService } from 'src/services/game/check-winner';

@Component({
  selector: 'game-grid-view',
  templateUrl: './game-grid-view.component.html',
  styleUrls: ['./game-grid-view.component.css']
})
export class GameGridViewComponent implements OnInit {

  @Input() picks: Pick[];
  columnNum: number;

  constructor(private winnerServie: WinnerService){};

  ngOnInit() {
    this.resize();
  }

  resize() {
    var column = Math.floor(window.innerWidth/240);
    this.columnNum = Math.max(column, 2);
  }

  getWinner(game: Game, refTeam: Team){
    if(game.gameStarted && this.winnerServie.winners(game, refTeam)){
      return "lawngreen";
    }
  }

  selected(team: Team, pick: Team){
    if(pick != null && team.id == pick.id){
      return "pick";
    }
  }

}
