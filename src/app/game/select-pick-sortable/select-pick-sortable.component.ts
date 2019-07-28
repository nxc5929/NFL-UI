import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Team, Pick, Player } from 'src/services/game/pick-model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AlertService } from 'src/services/alert-service';

@Component({
  selector: 'select-pick-sortable',
  templateUrl: './select-pick-sortable.component.html',
  styleUrls: ['./select-pick-sortable.component.css']
})
export class SelectPickSortableComponent implements OnInit {

  constructor(private gameService: GameService, private alertService: AlertService) { }

  picks: Pick[];
  middle: number;
  picksTop: Pick[];
  picksBottom: Pick[];

  survivor: Team;
  playerId: number;
  player: Player;
  playingTeams: Team[];

  loading: boolean = false;

  ngOnInit() {
    this.gameService.getPicks().subscribe(res => {
      this.playerId = res.data.id;
      this.picks = res.data.picks.sort((a, b) => {
        if(a.index != -1){
          return a.index - b.index;
        }
        return a.game.id - b.game.id;
      });
      this.survivor = res.data.survivor;
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

  updateSurvivor(survivor: Team){
    this.survivor = survivor;
  }

  submit() {
    this.updateIndex();
    this.loading = true;
    var valid = this.validateForm();
    if (!valid) {
      this.alertService.error("Please fill in all picks!");
      this.loading = false;
    } else {

      this.gameService.setPicks(new Player(this.playerId, this.picks, this.survivor, null, null))
        .subscribe(
          success => this.alertService.success("Successfully Submitted Picks"),
          error => this.alertService.error("Something went wrong"),
          () => this.loading = false
        );
    }
  }

  updateIndex(): void{
    for(var i=0; i < this.picks.length; i++){
      this.picks[i].index = i;
    }
  }

  validateForm(): boolean {
    var valid = true;
    this.picks.forEach(pick => {
      if (pick.pick == null) {
        valid = false;
      }
    });
    return valid;
  }

}
