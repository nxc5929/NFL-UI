import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin/admin-service';
import { Game, Week } from 'src/services/game/pick-model';
import { AlertService } from 'src/services/alert-service';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'update-spread',
  templateUrl: './update-spread.component.html',
  styleUrls: ['./update-spread.component.css']
})
export class UpdateSpreadComponent implements OnInit {

  constructor(private adminService: AdminService, private alertService: AlertService) { }

  games: Game[];
  normalWeekSelected: string;
  normalWeek: boolean;
  loading: boolean = false;

  ngOnInit() {
    this.adminService.getSpread().subscribe(res => {
      this.games = res.data.games.sort((a, b) => a.id - b.id);
      this.normalWeek = res.data.normalWeek;
      this.normalWeekSelected = this.normalWeek ? "true" : "false";
    });
  }

  validateSubmission(games: Game[]){
    var errorGames = games.filter((g, index, array) => g.spread.favTeam == null);
    if(errorGames.length != 0){
      this.alertService.error("Please fill in " + errorGames[0].homeTeam.teamAbv + " vs " + errorGames[0].awayTeam.teamAbv + " game!");
      return false;
    }
    return true;
  }

  submit(){
    if(this.validateSubmission(this.games)){
      this.loading = true;
      var week = new Week(0, this.games, null, this.normalWeek, null, null);
      this.adminService.setSpreads(week).subscribe(
        success => this.alertService.success("Successfully Submitted Spreads"),
        error => this.alertService.error("Something went wrong"),
        () => this.loading = false
      );
    }
  }

  updateWeek(event:MatRadioChange){
    if(event.value == "true"){
      this.normalWeek = true;
    }else{
      this.normalWeek = false;
    }
  }

}
