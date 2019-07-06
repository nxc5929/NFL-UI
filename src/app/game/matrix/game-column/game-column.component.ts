import { Component, OnInit, Input } from '@angular/core';
import { Game, Team } from 'src/services/game/pick-model';

@Component({
  selector: 'game-column',
  templateUrl: './game-column.component.html',
  styleUrls: ['../shared-styles.css']
})
export class GameColumnComponent implements OnInit {

  _games: Game[]

  @Input() 
  set games(games: Game[]){
    this._games = games;
    if(games){
      this._games = games.sort(function(a, b){
        return a.id - b.id
      });
    }
  }

  get games(){
    return this._games;
  }

  constructor() { }

  ngOnInit() {}

  getWinner(game:Game, referenceTeam:Team){
    if(game.final){
      var homeTeam:number = game.homeTeam.id;
      var homeScore:number = game.homeScore;
      var awayTeam:number = game.awayTeam.id;
      var awayScore:number = game.awayScore;

      var spread:number = game.spread.points;
      var favoriteTeam:number = game.spread.favTeam.id;
      
      homeScore += (homeTeam == favoriteTeam) ? -spread : spread;

      if((homeScore > awayScore && homeTeam==referenceTeam.id)
      || (homeScore < awayScore && awayTeam==referenceTeam.id)){
        return "winner";
      }else{
        return "loser";
      }
    }
    return "";
  }

}
