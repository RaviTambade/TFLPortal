import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveDetailsComponent } from './employee-leave-details.component';

describe('EmployeeLeaveDetailsComponent', () => {
  let component: EmployeeLeaveDetailsComponent;
  let fixture: ComponentFixture<EmployeeLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
