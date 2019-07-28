import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';

@Component({
  selector: 'app-select-picks',
  templateUrl: './select-picks.component.html',
  styleUrls: ['./select-picks.component.css']
})
export class SelectPicksComponent implements OnInit {

  standardPick: boolean = true

  constructor(private gameService: GameService) {
    this.gameService.getWeekInfo().subscribe(
      res => this.standardPick = res.data.normalWeek
    )
   }

  ngOnInit() {}

}
