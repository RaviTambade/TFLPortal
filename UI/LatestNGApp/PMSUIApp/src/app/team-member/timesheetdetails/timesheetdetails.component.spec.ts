import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetdetailsComponent } from './timesheetdetails.component';

describe('TimesheetdetailsComponent', () => {
  let component: TimesheetdetailsComponent;
  let fixture: ComponentFixture<TimesheetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
