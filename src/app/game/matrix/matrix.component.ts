import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Player, Game } from 'src/services/game/pick-model';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor(private gameService: GameService) { }

  players: Player[]

  playerKeys: string[]
  matrix: any;
  normalWeekColumns: string[] = ['home', 'spread', 'away', 'score'];
  confidenceWeekColumns: string[] = ['home', 'away', 'score'];;
  displayedColumns: string[];

  ngOnInit() {
    this.gameService.getMatrix().subscribe(res => {
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
      this.displayedColumns = this.displayedColumns.concat(this.playerKeys);
      this.players = res.data.players;
      console.log(this.players);
    });
    // this.gameService.getWeeks().subscribe(res => console.log(res));
  }

}
