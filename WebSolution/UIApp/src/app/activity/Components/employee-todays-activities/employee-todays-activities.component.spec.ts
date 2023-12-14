import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTodaysActivitiesComponent } from './employee-todays-activities.component';

describe('EmployeeTodaysActivitiesComponent', () => {
  let component: EmployeeTodaysActivitiesComponent;
  let fixture: ComponentFixture<EmployeeTodaysActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTodaysActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTodaysActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
