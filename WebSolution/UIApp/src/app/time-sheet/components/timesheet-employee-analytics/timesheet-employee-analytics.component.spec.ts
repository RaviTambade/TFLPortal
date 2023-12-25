import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEmployeeAnalyticsComponent } from './timesheet-employee-analytics.component';

describe('TimesheetEmployeeAnalyticsComponent', () => {
  let component: TimesheetEmployeeAnalyticsComponent;
  let fixture: ComponentFixture<TimesheetEmployeeAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEmployeeAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEmployeeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
