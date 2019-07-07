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
  displayedColumns: string[] = ['home', 'spread', 'away', 'score'];

  ngOnInit() {
    this.gameService.getMatrix().subscribe(res => {
      console.log(res)
      this.matrix = res.data.matrix;
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
