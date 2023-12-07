import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTimesheetComponent } from './approve-timesheet.component';

describe('ApproveTimesheetComponent', () => {
  let component: ApproveTimesheetComponent;
  let fixture: ComponentFixture<ApproveTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
