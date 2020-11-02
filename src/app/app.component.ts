import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sim-racing-fuel-calc';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  switchToggledOn(){
    this.router.navigateByUrl("");
  }

  switchToggledOff(){
    this.router.navigateByUrl("lap");
  }
}
