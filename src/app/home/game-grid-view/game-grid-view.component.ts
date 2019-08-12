import { Component, OnInit, Input } from '@angular/core';
import { Pick } from 'src/services/game/pick-model';

@Component({
  selector: 'game-grid-view',
  templateUrl: './game-grid-view.component.html',
  styleUrls: ['./game-grid-view.component.css']
})
export class GameGridViewComponent implements OnInit {

  @Input() picks: Pick[];
  columnNum: number;

  ngOnInit() {
    this.columnNum = Math.floor(window.innerWidth/200);
  }

  onResize(event) {
    this.columnNum = Math.floor(event.target.innerWidth/200);
  }

}
