import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimesheetComponent } from './employee-timesheet.component';

describe('EmployeeTimesheetComponent', () => {
  let component: EmployeeTimesheetComponent;
  let fixture: ComponentFixture<EmployeeTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
