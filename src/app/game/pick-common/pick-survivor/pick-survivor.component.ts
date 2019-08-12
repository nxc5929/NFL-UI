import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team, Pick, Game } from 'src/services/game/pick-model';

@Component({
  selector: 'pick-survivor',
  templateUrl: './pick-survivor.component.html',
  styleUrls: ['./pick-survivor.component.css']
})
export class PickSurvivorComponent implements OnInit {

  teams: Team[] = [];
  allGames: Game[] = [];
  survivorId: number

  @Input()
  set games(games: Pick[]) {
    if (games) {
      games.forEach(gameObj => {
        this.allGames.push(gameObj.game);
        this.teams.push(gameObj.game.homeTeam);
        this.teams.push(gameObj.game.awayTeam);
      });
      this.teams.sort((a, b) => a.teamName.localeCompare(b.teamName));
    }
  }
  @Input() 
  set survivor(pick: Pick){
    if(pick && pick.pick){
      this.survivorId = pick.pick.id;
    }
  }
  @Output() onChange: EventEmitter<Pick> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  teamSelected(pickId: number){
    var survivor;
    this.allGames.forEach(game => {
      if(game.homeTeam.id == pickId){
        survivor = new Pick(0, game, game.homeTeam, -2);
      }else if(game.awayTeam.id == pickId){
        survivor = new Pick(0, game, game.awayTeam, -2);
      }
    });
    this.onChange.emit(survivor);
  }

}
