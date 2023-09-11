import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectdetailsComponent } from './employeeprojectdetails.component';

describe('EmployeeprojectdetailsComponent', () => {
  let component: EmployeeprojectdetailsComponent;
  let fixture: ComponentFixture<EmployeeprojectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeprojectdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
