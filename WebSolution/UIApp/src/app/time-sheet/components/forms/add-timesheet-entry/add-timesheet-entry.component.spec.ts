import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimesheetEntryComponent } from './add-timesheet-entry.component';

describe('AddTimesheetEntryComponent', () => {
  let component: AddTimesheetEntryComponent;
  let fixture: ComponentFixture<AddTimesheetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimesheetEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimesheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
