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
  games: Game[];

  ngOnInit() {
    this.gameService.getMatrix().subscribe(res => {
      console.log(res)
      this.players = res.data.players;
      this.games = res.data.games;
    });
    this.gameService.getWeeks().subscribe(res => console.log(res));
    this.gameService.getTeams().subscribe(res => console.log(res));
  }

}
