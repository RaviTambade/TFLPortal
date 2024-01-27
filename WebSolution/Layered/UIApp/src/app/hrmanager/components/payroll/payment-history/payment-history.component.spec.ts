import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryComponent } from './payment-history.component';

describe('PaymentHistoryComponent', () => {
  let component: PaymentHistoryComponent;
  let fixture: ComponentFixture<PaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
