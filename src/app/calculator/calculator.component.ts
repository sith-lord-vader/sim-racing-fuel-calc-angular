import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcForm;
  fuelRequired = "0.0";

  constructor() {
    this.fuelRequired = "0.0";
   }

  ngOnInit(): void {
    this.fuelRequired = "0.0";
    this.calcForm = new FormGroup({
      lapTime: new FormControl("", [Validators.required, Validators.minLength(1)]),
      fuelRate: new FormControl("", [Validators.required, Validators.minLength(1)]),
      totalTime: new FormControl("", [Validators.required, Validators.minLength(1)]),
      additionalLaps: new FormControl("", [Validators.required, Validators.minLength(1)]),
    })
  }
  
  onClickSubmit(data) {
    this.fuelRequired = ((((parseFloat(data.totalTime)*60)/parseFloat(data.lapTime)) + 1) * parseFloat(data.fuelRate)).toPrecision(1);
  }
}
