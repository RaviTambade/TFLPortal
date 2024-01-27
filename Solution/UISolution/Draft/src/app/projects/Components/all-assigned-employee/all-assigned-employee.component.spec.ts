import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssignedEmployeeComponent } from './all-assigned-employee.component';

describe('AllAssignedEmployeeComponent', () => {
  let component: AllAssignedEmployeeComponent;
  let fixture: ComponentFixture<AllAssignedEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAssignedEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAssignedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
