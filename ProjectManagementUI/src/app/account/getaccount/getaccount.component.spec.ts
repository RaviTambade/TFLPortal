import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaccountComponent } from './getaccount.component';

describe('GetaccountComponent', () => {
  let component: GetaccountComponent;
  let fixture: ComponentFixture<GetaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
