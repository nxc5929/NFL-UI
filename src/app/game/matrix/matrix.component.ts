import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Player, Game, Team, WeekModel, Pick } from 'src/services/game/pick-model';
import { GenericResponse } from 'src/services/generic-response';
import { WinnerService } from 'src/services/game/check-winner';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor(private gameService: GameService, private winnerServie: WinnerService) { }

  players: Map<String, Player>;
  playerKeys: string[];
  matrix: any;
  statusMatrix: Array<any> = [{"ref": "Tiebreaker"}, {"ref": "Survivor"}, {"ref": "# Correct"}];
  normalWeekColumns: string[] = ['home', 'spread', 'away', 'score'];
  confidenceWeekColumns: string[] = ['home', 'away', 'score'];;
  displayedColumns: string[];

  weeks: string[];

  ngOnInit() {
    this.gameService.getMatrix().subscribe(res => this.handleWeek(res));
    this.gameService.getWeeks().subscribe(res => this.weeks = res.data);
  }

  changeWeek(weekId: number){
    this.gameService.getPastMatrix(weekId).subscribe(res => this.handleWeek(res));
  }

  handleWeek(res: WeekModel){
    console.log(res)
      this.matrix = res.data.matrix;
      if(res.data.normalWeek){
        this.displayedColumns = this.normalWeekColumns;
      }else{
        this.displayedColumns = this.confidenceWeekColumns;
      }
      this.matrix.sort((a, b) => a.ref.game.id - b.ref.game.id);
      this.playerKeys = Object.keys(this.matrix[0]);
      this.playerKeys = this.playerKeys.filter(word => word != "ref");
      this.sortNames(this.playerKeys);
      this.displayedColumns = this.displayedColumns.concat(this.playerKeys);
      this.players = res.data.players;
  }

  getStatusMatrix(playerKey: string, refRow: string){
    var player: Player = this.players[playerKey];
    if(refRow == this.statusMatrix[0]["ref"]){
      return player.tiebreaker;
    }else if(refRow == this.statusMatrix[1]["ref"]){
      if(player.survivor){
        return player.survivor.pick.teamAbv;
      }
      return "-";
    }else if(refRow == this.statusMatrix[2]["ref"]){
      var correct = 0;
      this.matrix.forEach(row => {
        var pick: Pick = row[playerKey];
        console.log();
        if(pick.game.final && this.winnerServie.winners(pick.game, pick.pick)){
          console.log("Correct: " + correct);
          correct = correct + 1;
        }
      });
      console.log(player);
      return correct;
    }
  }

  sortNames(playerKeys: String[]){
    playerKeys.sort((a, b) => {
      var aFirst = a.split(" ")[0];
      var aLast = a.split(" ")[1];
      var bFirst = b.split(" ")[0];
      var bLast = b.split(" ")[1];
      if(aLast.localeCompare(bLast) == 0){
        return aFirst.localeCompare(bFirst);
      }
      return aLast.localeCompare(bLast);
    });
  }

  checkGameWinner(game: Game, refTeam: Team){
    if(game.gameStarted){
      if(this.winnerServie.winners(game, refTeam)){
        return "winner";
      }
    }
  }

  checkPickWinner(game: Game, refTeam: Team){
    if(game.final){
      if(this.winnerServie.winners(game, refTeam)){
        return "winner";
      }
    }
  }

}
