import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pick-header',
  templateUrl: './pick-header.component.html',
  styleUrls: ['./pick-header.component.css']
})
export class PickHeaderComponent implements OnInit {

  constructor() { }

  repeat: boolean = true;

  ngOnInit() {
  }

}
