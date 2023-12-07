import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWorkDurationOfEmployeeComponent } from './total-work-duration-of-employee.component';

describe('TotalWorkDurationOfEmployeeComponent', () => {
  let component: TotalWorkDurationOfEmployeeComponent;
  let fixture: ComponentFixture<TotalWorkDurationOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalWorkDurationOfEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalWorkDurationOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
