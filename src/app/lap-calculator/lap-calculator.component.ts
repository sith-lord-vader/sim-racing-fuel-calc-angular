import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lap-calculator',
  templateUrl: './lap-calculator.component.html',
  styleUrls: ['./lap-calculator.component.css']
})
export class LapCalculatorComponent implements OnInit {

  calcForm;
  fuelRequired = "0.0";

  constructor(private router: Router) {
    setTimeout(()=>{},400);
    this.fuelRequired = "0.0";
   }

  ngOnInit(): void {
    this.fuelRequired = "0.0";
    this.calcForm = new FormGroup({
      fuelRate: new FormControl("", [Validators.required, Validators.minLength(1)]),
      totalLaps: new FormControl("", [Validators.required, Validators.minLength(1)]),
      additionalLaps: new FormControl("", [Validators.required, Validators.minLength(1)]),
    })
  }
  
  onClickSubmit(data) {
    console.log(((((parseFloat(data.totalTime)*60)/parseFloat(data.lapTime)) + 1) * parseFloat(data.fuelRate)).toFixed(1));
    this.fuelRequired = (((parseFloat(data.totalLaps)) + parseFloat(data.additionalLaps)) * parseFloat(data.fuelRate)).toFixed(1);
  }

  toggle(){
    setTimeout(()=>this.router.navigateByUrl(""), 400);
  }
}