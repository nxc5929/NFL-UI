import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Game, Team, Pick } from 'src/services/game/pick-model';
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
        this.playerKeys = Object.keys(this.survivors[0]);
        this.sortNames(this.playerKeys);
        console.log(this.survivors);
      }
    );
  }

  getValue(pick: Pick){
    if(pick){
      return pick.pick.teamAbv;
    }
    return "-";
  }

  checkWinner(pick: Pick){
    if(!pick){
      return;
    }
    if(pick.game.final && this.winnerServie.winners(pick.game, pick.pick)){
      return "winner";
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
