import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Team, Pick, Player } from 'src/services/game/pick-model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-select-pick-sortable',
  templateUrl: './select-pick-sortable.component.html',
  styleUrls: ['./select-pick-sortable.component.css']
})
export class SelectPickSortableComponent implements OnInit {

  constructor(private gameService: GameService) { }

  picks: Pick[];
  middle: number;
  picksTop: Pick[];
  picksBottom: Pick[];

  tiebreaker: number;
  playerId: number;
  player: Player;
  playingTeams: Team[];

  loading: boolean = false;

  ngOnInit() {
    this.gameService.getPicks().subscribe(res => {
      this.playerId = res.data.id;
      this.picks = res.data.picks.sort((a, b) => a.game.id - b.game.id);
      this.createTwoLists();
      this.tiebreaker = res.data.tiebreaker;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.maintainTwoLists();
  }

  createTwoLists(){
    this.middle = this.picks.length/2;
    this.picksTop = this.picks.slice(0, this.middle);
    this.picksBottom = this.picks.slice(this.middle);
  }

  maintainTwoLists(){
    this.picks = this.picksTop.concat(this.picksBottom);
    this.createTwoLists();
  }

}
