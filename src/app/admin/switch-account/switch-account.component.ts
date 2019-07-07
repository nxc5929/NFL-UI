import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin/admin-service';
import { PlayerStatus } from 'src/services/admin/admin-models';
import { Account } from 'src/services/game/pick-model';

@Component({
  selector: 'switch-account',
  templateUrl: './switch-account.component.html',
  styleUrls: ['./switch-account.component.css']
})
export class SwitchAccountComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  playerStatus: PlayerStatus[]

  ngOnInit() {
    this.adminService.getPlayerStatus().subscribe(res => 
      this.playerStatus = res.data.sort(a => a.picksSubmitted ? 1 : 0)
    );
  }

  spoof(account: Account){
    console.log("Spoofing: " + account.firstName);
    this.adminService.spoofAccount(account.id).subscribe(res => {
      this.adminService.setSpoofedToken(res.data);
      window.location.reload();
    });
  }

}
