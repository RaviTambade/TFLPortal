import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLeaveComponent } from './pending-leave.component';

describe('PendingLeaveComponent', () => {
  let component: PendingLeaveComponent;
  let fixture: ComponentFixture<PendingLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
