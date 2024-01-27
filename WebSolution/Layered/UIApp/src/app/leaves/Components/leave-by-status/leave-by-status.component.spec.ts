import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveByStatusComponent } from './leave-by-status.component';

describe('LeaveByStatusComponent', () => {
  let component: LeaveByStatusComponent;
  let fixture: ComponentFixture<LeaveByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
