import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeesComponent } from './get-employees.component';

describe('GetEmployeesComponent', () => {
  let component: GetEmployeesComponent;
  let fixture: ComponentFixture<GetEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
