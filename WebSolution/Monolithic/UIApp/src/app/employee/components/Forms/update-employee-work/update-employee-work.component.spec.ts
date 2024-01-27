import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeWorkComponent } from './update-employee-work.component';

describe('UpdateEmployeeWorkComponent', () => {
  let component: UpdateEmployeeWorkComponent;
  let fixture: ComponentFixture<UpdateEmployeeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
