import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployeeToProjectComponent } from './assign-employee-to-project.component';

describe('AssignEmployeeToProjectComponent', () => {
  let component: AssignEmployeeToProjectComponent;
  let fixture: ComponentFixture<AssignEmployeeToProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEmployeeToProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEmployeeToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
