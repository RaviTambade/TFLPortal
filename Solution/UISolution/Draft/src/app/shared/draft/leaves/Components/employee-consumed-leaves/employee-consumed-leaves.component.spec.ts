import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeConsumedLeavesComponent } from './employee-consumed-leaves.component';

describe('EmployeeConsumedLeavesComponent', () => {
  let component: EmployeeConsumedLeavesComponent;
  let fixture: ComponentFixture<EmployeeConsumedLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeConsumedLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeConsumedLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
