import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team, Pick, Game } from 'src/services/game/pick-model';

@Component({
  selector: 'pick-survivor',
  templateUrl: './pick-survivor.component.html',
  styleUrls: ['./pick-survivor.component.css']
})
export class PickSurvivorComponent implements OnInit {

  _teams: Team[];
  allGames: Game[] = [];
  survivorId: number

  @Input() 
  set teams(teams: Team[]){
    this._teams = teams.sort((a, b) => a.teamName.localeCompare(b.teamName));
  }

  @Input() 
  set picks(picks: Pick[]){
    picks.forEach(pick => this.allGames.push(pick.game));
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
    console.log("Finding PickId: " + pickId);
    this.allGames.forEach(game => {
      if(game.homeTeam.id == pickId){
        survivor = new Pick(0, game, game.homeTeam, -2);
        console.log("Found Home");
      }else if(game.awayTeam.id == pickId){
        survivor = new Pick(0, game, game.awayTeam, -2);
        console.log("Finding Away");
      }
    });
    this.onChange.emit(survivor);
  }

}
