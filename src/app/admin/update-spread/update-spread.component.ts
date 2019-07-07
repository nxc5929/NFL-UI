import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { AdminService } from 'src/services/admin/admin-service';
import { Game } from 'src/services/game/pick-model';
import { AlertService } from 'src/services/alert-service';

@Component({
  selector: 'update-spread',
  templateUrl: './update-spread.component.html',
  styleUrls: ['./update-spread.component.css']
})
export class UpdateSpreadComponent implements OnInit {

  constructor(private adminService: AdminService, private alertService: AlertService) { }

  games: Game[]
  loading: boolean = false;

  ngOnInit() {
    this.adminService.getGames().subscribe(res => this.games = res.data);
  }

  submit(){
    console.log(this.games);
    this.loading = true;
    this.adminService.setSpreads(this.games).subscribe(
      success => this.alertService.success("Successfully Submitted Spreads"),
      error => this.alertService.error("Something went wrong"),
      () => this.loading = false
    );
  }

}
