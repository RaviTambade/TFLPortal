import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEmployeeWorkChartComponent } from './timesheet-employee-work-chart.component';

describe('TimesheetEmployeeWorkChartComponent', () => {
  let component: TimesheetEmployeeWorkChartComponent;
  let fixture: ComponentFixture<TimesheetEmployeeWorkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEmployeeWorkChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEmployeeWorkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
