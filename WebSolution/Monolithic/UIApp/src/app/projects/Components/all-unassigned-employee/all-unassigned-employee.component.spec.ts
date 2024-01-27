import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnassignedEmployeeComponent } from './all-unassigned-employee.component';

describe('AllUnassignedEmployeeComponent', () => {
  let component: AllUnassignedEmployeeComponent;
  let fixture: ComponentFixture<AllUnassignedEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUnassignedEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUnassignedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
