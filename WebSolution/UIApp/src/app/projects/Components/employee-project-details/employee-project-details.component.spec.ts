import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProjectDetailsComponent } from './employee-project-details.component';

describe('EmployeeProjectDetailsComponent', () => {
  let component: EmployeeProjectDetailsComponent;
  let fixture: ComponentFixture<EmployeeProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
