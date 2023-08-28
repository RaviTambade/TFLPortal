import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetRegistrationComponent } from './timesheet-registration.component';

describe('TimesheetRegistrationComponent', () => {
  let component: TimesheetRegistrationComponent;
  let fixture: ComponentFixture<TimesheetRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
