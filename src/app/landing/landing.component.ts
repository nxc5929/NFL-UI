import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/services/alert-service';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  test(){
    this.alertService.success("Testing");
  }

}
