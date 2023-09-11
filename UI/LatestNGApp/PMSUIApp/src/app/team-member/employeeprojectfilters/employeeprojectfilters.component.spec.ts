import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectfiltersComponent } from './employeeprojectfilters.component';

describe('EmployeeprojectfiltersComponent', () => {
  let component: EmployeeprojectfiltersComponent;
  let fixture: ComponentFixture<EmployeeprojectfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeprojectfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprojectfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
