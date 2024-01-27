import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileComponent } from './employee-profile.component';

describe('EmployeeProfileComponent', () => {
  let component: EmployeeProfileComponent;
  let fixture: ComponentFixture<EmployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
