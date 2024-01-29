import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeavesByDateComponent } from './employee-leaves-by-date.component';

describe('EmployeeLeavesByDateComponent', () => {
  let component: EmployeeLeavesByDateComponent;
  let fixture: ComponentFixture<EmployeeLeavesByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeavesByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeavesByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
