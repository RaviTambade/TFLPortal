import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetlistComponent } from './timesheetlist.component';

describe('TimesheetlistComponent', () => {
  let component: TimesheetlistComponent;
  let fixture: ComponentFixture<TimesheetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
