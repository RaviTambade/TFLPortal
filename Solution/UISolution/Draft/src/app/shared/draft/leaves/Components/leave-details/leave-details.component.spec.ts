import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailsComponent } from './leave-details.component';

describe('LeaveDetailsComponent', () => {
  let component: LeaveDetailsComponent;
  let fixture: ComponentFixture<LeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
