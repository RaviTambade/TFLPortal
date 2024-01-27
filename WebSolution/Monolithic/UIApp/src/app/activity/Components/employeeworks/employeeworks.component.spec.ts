import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeworksComponent } from './employeeworks.component';

describe('EmployeeworksComponent', () => {
  let component: EmployeeworksComponent;
  let fixture: ComponentFixture<EmployeeworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
