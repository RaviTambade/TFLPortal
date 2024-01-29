import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeesOfProjectComponent } from './all-employees-of-project.component';

describe('AllEmployeesOfProjectComponent', () => {
  let component: AllEmployeesOfProjectComponent;
  let fixture: ComponentFixture<AllEmployeesOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeesOfProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmployeesOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
