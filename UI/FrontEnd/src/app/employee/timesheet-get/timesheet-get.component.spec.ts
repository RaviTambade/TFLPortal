import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetGetComponent } from './timesheet-get.component';

describe('TimesheetGetComponent', () => {
  let component: TimesheetGetComponent;
  let fixture: ComponentFixture<TimesheetGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
