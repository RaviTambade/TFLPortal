import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectworkdetailsComponent } from './employeeprojectworkdetails.component';

describe('EmployeeprojectworkdetailsComponent', () => {
  let component: EmployeeprojectworkdetailsComponent;
  let fixture: ComponentFixture<EmployeeprojectworkdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeprojectworkdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprojectworkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
