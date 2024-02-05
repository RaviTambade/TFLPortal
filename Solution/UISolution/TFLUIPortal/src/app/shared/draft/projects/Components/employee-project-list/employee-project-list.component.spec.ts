import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProjectListComponent } from './employee-project-list.component';

describe('EmployeeProjectListComponent', () => {
  let component: EmployeeProjectListComponent;
  let fixture: ComponentFixture<EmployeeProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
