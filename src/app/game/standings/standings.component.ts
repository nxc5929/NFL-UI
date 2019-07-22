import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';
import { Standings } from 'src/services/game/pick-model';
import { AccountService } from 'src/services/accounts/account-service';

@Component({
  selector: 'standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  standings: Standings[];
  displayedColumns: String[] = ['user', 'correct', 'total'];

  constructor(private gameService: GameService, private accountService: AccountService) { }

  ngOnInit() {
    this.gameService.getStandings().subscribe(res => 
      this.standings = res.data.sort((a, b) => b.correct - a.correct)
    );
  }

  getPercentage(percent: number){
    return (percent*100).toFixed(2) + "%";
  }
  
  isMe(o){
    var account = this.accountService.currentUserValue;
    if(o.user.fullName == account.firstName + " " + account.lastName){
      return "me";
    }
  }

}
