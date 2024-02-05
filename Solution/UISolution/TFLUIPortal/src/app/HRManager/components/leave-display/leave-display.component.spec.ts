import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDisplayComponent } from './leave-display.component';

describe('LeaveDisplayComponent', () => {
  let component: LeaveDisplayComponent;
  let fixture: ComponentFixture<LeaveDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
