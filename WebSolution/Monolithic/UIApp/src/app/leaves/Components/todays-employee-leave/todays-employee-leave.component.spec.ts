import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysEmployeeLeaveComponent } from './todays-employee-leave.component';

describe('TodaysEmployeeLeaveComponent', () => {
  let component: TodaysEmployeeLeaveComponent;
  let fixture: ComponentFixture<TodaysEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysEmployeeLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
