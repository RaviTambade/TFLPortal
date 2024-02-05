import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDisplayComponent } from './pay-display.component';

describe('PayDisplayComponent', () => {
  let component: PayDisplayComponent;
  let fixture: ComponentFixture<PayDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
