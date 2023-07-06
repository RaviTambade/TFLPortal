import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTimesheetComponent } from './details-timesheet.component';

describe('DetailsTimesheetComponent', () => {
  let component: DetailsTimesheetComponent;
  let fixture: ComponentFixture<DetailsTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
