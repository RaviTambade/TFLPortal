import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRoutingComponent } from './leave-routing.component';

describe('LeaveRoutingComponent', () => {
  let component: LeaveRoutingComponent;
  let fixture: ComponentFixture<LeaveRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
