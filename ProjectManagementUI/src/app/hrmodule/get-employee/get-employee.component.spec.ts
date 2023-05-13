import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeComponent } from './get-employee.component';

describe('GetEmployeeComponent', () => {
  let component: GetEmployeeComponent;
  let fixture: ComponentFixture<GetEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
