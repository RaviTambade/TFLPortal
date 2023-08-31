import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEditComponent } from './timesheet-edit.component';

describe('TimesheetEditComponent', () => {
  let component: TimesheetEditComponent;
  let fixture: ComponentFixture<TimesheetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
