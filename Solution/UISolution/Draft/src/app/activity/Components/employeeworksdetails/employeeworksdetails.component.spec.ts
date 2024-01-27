import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeworksdetailsComponent } from './employeeworksdetails.component';

describe('EmployeeworksdetailsComponent', () => {
  let component: EmployeeworksdetailsComponent;
  let fixture: ComponentFixture<EmployeeworksdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeworksdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeworksdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
