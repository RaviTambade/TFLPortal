import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTimesheetComponent } from './get-timesheet.component';

describe('GetTimesheetComponent', () => {
  let component: GetTimesheetComponent;
  let fixture: ComponentFixture<GetTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
