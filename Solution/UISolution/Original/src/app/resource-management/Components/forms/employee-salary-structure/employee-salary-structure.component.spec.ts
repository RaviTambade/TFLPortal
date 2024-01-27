import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryStructureComponent } from './employee-salary-structure.component';

describe('EmployeeSalaryStructureComponent', () => {
  let component: EmployeeSalaryStructureComponent;
  let fixture: ComponentFixture<EmployeeSalaryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSalaryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
