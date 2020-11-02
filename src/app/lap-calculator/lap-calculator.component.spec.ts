import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapCalculatorComponent } from './lap-calculator.component';

describe('LapCalculatorComponent', () => {
  let component: LapCalculatorComponent;
  let fixture: ComponentFixture<LapCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
