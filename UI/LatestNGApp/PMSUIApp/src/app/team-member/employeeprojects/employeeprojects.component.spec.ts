import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectsComponent } from './employeeprojects.component';

describe('EmployeeprojectsComponent', () => {
  let component: EmployeeprojectsComponent;
  let fixture: ComponentFixture<EmployeeprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
