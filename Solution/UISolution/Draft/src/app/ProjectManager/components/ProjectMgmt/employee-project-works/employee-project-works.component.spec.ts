import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProjectWorksComponent } from './employee-project-works.component';

describe('EmployeeProjectWorksComponent', () => {
  let component: EmployeeProjectWorksComponent;
  let fixture: ComponentFixture<EmployeeProjectWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProjectWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProjectWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
