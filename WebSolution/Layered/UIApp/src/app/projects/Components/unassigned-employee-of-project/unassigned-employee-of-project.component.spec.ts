import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedEmployeeOfProjectComponent } from './unassigned-employee-of-project.component';

describe('UnassignedEmployeeOfProjectComponent', () => {
  let component: UnassignedEmployeeOfProjectComponent;
  let fixture: ComponentFixture<UnassignedEmployeeOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedEmployeeOfProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedEmployeeOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
