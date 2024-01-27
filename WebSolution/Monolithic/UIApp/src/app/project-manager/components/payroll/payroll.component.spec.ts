import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollComponent } from './payroll.component';

describe('PayrollComponent', () => {
  let component: PayrollComponent;
  let fixture: ComponentFixture<PayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
