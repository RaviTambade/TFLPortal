import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidEmployeeDetailsComponent } from './paid-employee-details.component';

describe('PaidEmployeeDetailsComponent', () => {
  let component: PaidEmployeeDetailsComponent;
  let fixture: ComponentFixture<PaidEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
