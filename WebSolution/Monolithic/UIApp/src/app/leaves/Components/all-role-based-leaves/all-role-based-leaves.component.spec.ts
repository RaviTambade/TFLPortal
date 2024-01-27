import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoleBasedLeavesComponent } from './all-role-based-leaves.component';

describe('AllRoleBasedLeavesComponent', () => {
  let component: AllRoleBasedLeavesComponent;
  let fixture: ComponentFixture<AllRoleBasedLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRoleBasedLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRoleBasedLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
