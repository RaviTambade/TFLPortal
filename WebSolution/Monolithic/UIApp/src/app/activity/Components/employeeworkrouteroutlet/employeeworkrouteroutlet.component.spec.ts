import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeworkrouteroutletComponent } from './employeeworkrouteroutlet.component';

describe('EmployeeworkrouteroutletComponent', () => {
  let component: EmployeeworkrouteroutletComponent;
  let fixture: ComponentFixture<EmployeeworkrouteroutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeworkrouteroutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeworkrouteroutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
