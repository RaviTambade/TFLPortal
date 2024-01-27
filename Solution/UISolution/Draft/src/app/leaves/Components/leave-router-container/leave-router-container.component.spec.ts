import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRouterContainerComponent } from './leave-router-container.component';

describe('LeaveRouterContainerComponent', () => {
  let component: LeaveRouterContainerComponent;
  let fixture: ComponentFixture<LeaveRouterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRouterContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRouterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
