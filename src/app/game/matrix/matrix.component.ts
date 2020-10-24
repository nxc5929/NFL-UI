import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Player, Game, Team, WeekModel, Pick } from 'src/services/game/pick-model';
import { GenericResponse } from 'src/services/generic-response';
import { WinnerService } from 'src/services/game/check-winner';
import { AccountService } from 'src/services/accounts/account-service';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor(private gameService: GameService, private winnerServie: WinnerService, private accountService:AccountService) { }

  players: Map<String, Player>;
  playerKeys: string[];
  loggedInPlayer: string;
  matrix: any;
  statusMatrix: Array<any>;
  normalWeekColumns: string[] = ['home', 'spread', 'away', 'score', 'loggedInPlayer'];
  confidenceWeekColumns: string[] = ['home', 'away', 'score', 'loggedInPlayer'];
  displayedColumns: string[];
  weeks: string[];
  weekId: number;

  ngOnInit() {
    this.gameService.getMatrix().subscribe(res => this.handleWeek(res));
    this.gameService.getWeeks().subscribe(res => this.weeks = res.data);
    this.loggedInPlayer = this.accountService.currentUserValue.fullName;
    console.log(this.loggedInPlayer);
  }

  changeWeek(weekId: number){
    this.gameService.getPastMatrix(weekId).subscribe(res => this.handleWeek(res));
  }

  handleWeek(res: WeekModel){
      this.matrix = res.data.matrix;
      this.weekId = res.data.id;
      if(res.data.normalWeek){
        this.displayedColumns = this.normalWeekColumns;
        this.statusMatrix = [{"ref": "Tiebreaker"}, {"ref": "Survivor"}, {"ref": "# Correct"}];
      }else{
        this.displayedColumns = this.confidenceWeekColumns;
        this.statusMatrix = [{"ref": "Tiebreaker"}, {"ref": "Survivor"}, {"ref": "# Correct"}, {"ref": "Points"}];
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
    if(refRow == "Tiebreaker"){
      return player.tiebreaker;
    }else if(refRow == "Survivor"){
      if(player.survivor){
        return player.survivor.pick.teamAbv;
      }
      return "-";
    }else if(refRow == "# Correct"){
      var correct = 0;
      this.matrix.forEach(row => {
        var pick: Pick = row[playerKey];
        if(pick.game.final && this.winnerServie.winners(pick.game, pick.pick)){
          correct += 1;
        }
      });
      return correct;
    }else if(refRow == "Points"){
      var points = 0;
      var length = this.matrix.length;
      this.matrix.forEach(row => {
        var pick: Pick = row[playerKey];
        if(pick.game.final && this.winnerServie.winners(pick.game, pick.pick)){
          points += (length - pick.index);
        }
      });
      return points;
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

  getStatusClass(playerKey: string, refRow: string){
    if(refRow == "Survivor"){
      var player: Player = this.players[playerKey];
      if(player.survivor == null){
        return;
      }
      var game: Game = player.survivor.game;
      var pick: Team = player.survivor.pick;
      if(game.final){
        if(this.winnerServie.winnersNoSpread(game, pick)){
          return "winner";
        }else{
          return "loser";
        }
      }
    }
    return;
  }

  downloadCSV(){
    this.gameService.getMatrixCSV(this.weekId).subscribe((data) => {
      var file = new Blob([data], {type: 'text/csv'});
      var fileURL = URL.createObjectURL(file);
      var link = document.createElement('a');
      link.href = fileURL;
      link.download = `${this.weekId}.csv`;
      link.click();
    });
  }

}
