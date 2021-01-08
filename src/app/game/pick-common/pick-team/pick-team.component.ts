import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/services/game/pick-model';

@Component({
  selector: 'pick-team',
  templateUrl: './pick-team.component.html',
  styleUrls: ['./pick-team.component.css']
})
export class PickTeamComponent implements OnInit {

  constructor() { }

  @Input() team: Team;

  ngOnInit() {
  }

}
