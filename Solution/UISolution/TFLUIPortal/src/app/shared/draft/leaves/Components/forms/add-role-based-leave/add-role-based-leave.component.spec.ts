import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleBasedLeaveComponent } from './add-role-based-leave.component';

describe('AddRoleBasedLeaveComponent', () => {
  let component: AddRoleBasedLeaveComponent;
  let fixture: ComponentFixture<AddRoleBasedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleBasedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoleBasedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
