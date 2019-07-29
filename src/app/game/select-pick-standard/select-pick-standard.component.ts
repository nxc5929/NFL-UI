import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { AlertService } from 'src/services/alert-service';
import { Team, Player, Pick } from 'src/services/game/pick-model';

@Component({
  selector: 'select-pick-standard',
  templateUrl: './select-pick-standard.component.html',
  styleUrls: ['./select-pick-standard.component.css']
})
export class SelectPickStandardComponent implements OnInit {

  constructor(private gameService: GameService, private alertService: AlertService) { }

  picks: Pick[];
  survivor: Team;
  tiebreaker: number
  player: Player
  playerId: number
  playingTeams: Team[];

  loading: boolean = false;


  ngOnInit() {
    this.gameService.getPicks().subscribe(res => {
      this.playerId = res.data.id;
      this.picks = res.data.picks.sort((a, b) => a.game.id - b.game.id);
      this.survivor = res.data.survivor;
      this.tiebreaker = res.data.tiebreaker;
    });
  }

  submit() {
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

  updateSurvivor(survivor: Team){
    this.survivor = survivor;
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