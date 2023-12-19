import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEmployeeCalenderComponent } from './timesheet-employee-calender.component';

describe('TimesheetEmployeeCalenderComponent', () => {
  let component: TimesheetEmployeeCalenderComponent;
  let fixture: ComponentFixture<TimesheetEmployeeCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEmployeeCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEmployeeCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
