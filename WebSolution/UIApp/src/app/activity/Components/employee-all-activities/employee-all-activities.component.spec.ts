import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAllActivitiesComponent } from './employee-all-activities.component';

describe('EmployeeAllActivitiesComponent', () => {
  let component: EmployeeAllActivitiesComponent;
  let fixture: ComponentFixture<EmployeeAllActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAllActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAllActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
