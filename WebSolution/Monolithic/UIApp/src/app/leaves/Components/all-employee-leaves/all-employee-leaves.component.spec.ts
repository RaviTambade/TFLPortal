import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeLeavesComponent } from './all-employee-leaves.component';

describe('AllEmployeeLeavesComponent', () => {
  let component: AllEmployeeLeavesComponent;
  let fixture: ComponentFixture<AllEmployeeLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmployeeLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
