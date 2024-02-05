import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveCountComponent } from './all-leave-count.component';

describe('AllLeaveCountComponent', () => {
  let component: AllLeaveCountComponent;
  let fixture: ComponentFixture<AllLeaveCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
