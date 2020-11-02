import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LapCalculatorComponent } from './lap-calculator/lap-calculator.component';


const routes: Routes = [
  {path: '', component: CalculatorComponent},
  {path: 'lap', component: LapCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
