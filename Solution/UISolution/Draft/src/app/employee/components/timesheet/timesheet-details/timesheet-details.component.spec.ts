import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDetailsComponent } from './timesheet-details.component';

describe('TimesheetDetailsComponent', () => {
  let component: TimesheetDetailsComponent;
  let fixture: ComponentFixture<TimesheetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
