import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeftSidebarComponent } from './employee-left-sidebar.component';

describe('EmployeeLeftSidebarComponent', () => {
  let component: EmployeeLeftSidebarComponent;
  let fixture: ComponentFixture<EmployeeLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
