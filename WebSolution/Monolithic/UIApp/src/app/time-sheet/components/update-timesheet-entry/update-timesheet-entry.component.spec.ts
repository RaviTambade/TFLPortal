import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimesheetEntryComponent } from './update-timesheet-entry.component';

describe('UpdateTimesheetEntryComponent', () => {
  let component: UpdateTimesheetEntryComponent;
  let fixture: ComponentFixture<UpdateTimesheetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTimesheetEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTimesheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
