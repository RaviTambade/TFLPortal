import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePendingLeavesComponent } from './employee-pending-leaves.component';

describe('EmployeePendingLeavesComponent', () => {
  let component: EmployeePendingLeavesComponent;
  let fixture: ComponentFixture<EmployeePendingLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePendingLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePendingLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
