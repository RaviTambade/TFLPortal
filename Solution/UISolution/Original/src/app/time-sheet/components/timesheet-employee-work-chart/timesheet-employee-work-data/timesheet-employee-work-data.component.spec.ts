import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEmployeeWorkDataComponent } from './timesheet-employee-work-data.component';

describe('TimesheetEmployeeWorkDataComponent', () => {
  let component: TimesheetEmployeeWorkDataComponent;
  let fixture: ComponentFixture<TimesheetEmployeeWorkDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEmployeeWorkDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEmployeeWorkDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
