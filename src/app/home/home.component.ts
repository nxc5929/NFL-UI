import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Pick } from 'src/services/game/pick-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  active: Pick[] = [];
  final: Pick[] = [];
  future: Pick[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getPicks().subscribe(
      res => {
        var picks = res.data.picks;
        picks.forEach(pick => {
          var isStarted = pick.game.gameStarted;
          var isFinal = pick.game.final;
          if(isFinal){
            this.final.push(pick);
          }else if(isStarted){
            this.active.push(pick);
          }else{
            this.future.push(pick);
          }
        })
      }
    );
  }

  onResize(event) {
  }

}
