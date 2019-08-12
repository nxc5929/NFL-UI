import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Player, Game, Team, WeekModel } from 'src/services/game/pick-model';
import { GenericResponse } from 'src/services/generic-response';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor(private gameService: GameService) { }

  players: Map<String, Player>;
  playerKeys: string[];
  matrix: any;
  statusMatrix: Array<any> = [{"ref": "tie"}, {"ref": "survivor"}, {"ref": "correct"}];
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
    if(refRow == "tie"){
      return player.tiebreaker;
    }else if(refRow == "survivor"){
      return player.survivor.pick.teamAbv;
    }else if(refRow == "correct"){
      var correct = 0;
      return 2;
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

}
