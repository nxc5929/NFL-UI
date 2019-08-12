import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';

@Component({
  selector: 'survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.css']
})
export class SurvivorComponent implements OnInit {

  survivors: any;

  playerKeys: string[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getSurvivor().subscribe(
      res => {
        this.survivors = res.data;
        this.playerKeys = Object.keys(this.survivors[0]);;
        console.log(this.survivors);
      }
    );
  }
}
