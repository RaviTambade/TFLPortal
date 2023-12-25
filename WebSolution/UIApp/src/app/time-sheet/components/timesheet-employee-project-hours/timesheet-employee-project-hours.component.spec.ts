import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEmployeeProjectHoursComponent } from './timesheet-employee-project-hours.component';

describe('TimesheetEmployeeProjectHoursComponent', () => {
  let component: TimesheetEmployeeProjectHoursComponent;
  let fixture: ComponentFixture<TimesheetEmployeeProjectHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEmployeeProjectHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEmployeeProjectHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
