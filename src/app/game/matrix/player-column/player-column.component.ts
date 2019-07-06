import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/services/game/pick-model';

@Component({
  selector: 'player-column',
  templateUrl: './player-column.component.html',
  styleUrls: ['../shared-styles.css']
})
export class PlayerColumnComponent implements OnInit {

  _player: Player

  @Input() 
  set player(player: Player){
    this._player = player;
    if(player){
      this._player.picks = player.picks.sort(function(a, b){
        return a.game.id - b.game.id
      });
    }
  }

  get player(){
    return this._player;
  }

  constructor() { }

  ngOnInit() {}

}
