import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Game, Team } from 'src/services/game/pick-model';
import { WinnerService } from 'src/services/game/check-winner';

@Component({
  selector: 'survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.css']
})
export class SurvivorComponent implements OnInit {

  survivors: any;

  playerKeys: string[];

  constructor(private gameService: GameService, private winnerServie: WinnerService) { }

  ngOnInit() {
    this.gameService.getSurvivor().subscribe(
      res => {
        this.survivors = res.data;
        this.playerKeys = Object.keys(this.survivors[0]);;
        console.log(this.survivors);
      }
    );
  }

  checkWinner(game: Game, refTeam: Team){
    if(game.final && this.winnerServie.winners(game, refTeam)){
      return "winner";
    }
  }
}
