import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game/game-service';

@Component({
  selector: 'app-survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.css']
})
export class SurvivorComponent implements OnInit {

  survivors: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getSurvivor().subscribe(
      res => this.survivors = res.data
    );
  }

}
