import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoleBasedLeaveComponent } from './update-role-based-leave.component';

describe('UpdateRoleBasedLeaveComponent', () => {
  let component: UpdateRoleBasedLeaveComponent;
  let fixture: ComponentFixture<UpdateRoleBasedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRoleBasedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoleBasedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
