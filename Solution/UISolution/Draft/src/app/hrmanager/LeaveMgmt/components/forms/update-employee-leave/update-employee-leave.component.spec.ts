import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeLeaveComponent } from './update-employee-leave.component';

describe('UpdateEmployeeLeaveComponent', () => {
  let component: UpdateEmployeeLeaveComponent;
  let fixture: ComponentFixture<UpdateEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
