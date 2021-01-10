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
  tiebreaker: number;

  survivorSelection: Team[];
  survivor: Pick;
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
      let temp = this.picks;
      this.picks = this.picks.concat(this.picks);
      this.picks = this.picks.concat(temp);
      this.picks.pop();
      this.picks.pop();
      this.survivorSelection = res.data.survivorSelection;
      this.survivor = res.data.survivor;
      this.tiebreaker = res.data.tiebreaker;
    });
  }


  updateSurvivor(survivor: Pick){
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

      this.gameService.setPicks(new Player(this.playerId, this.picks, this.survivor, this.tiebreaker, null))
        .subscribe(
          success => this.alertService.success("Successfully Submitted Picks"),
          error => this.alertService.error("Something went wrong"),
          () => this.loading = false
        );
    }
  }

  updateTiebreaker(tiebreaker: string){
    this.tiebreaker = Number(tiebreaker);
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
