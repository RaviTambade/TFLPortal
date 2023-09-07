import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRegisterComponent } from './task-register.component';

describe('TaskRegisterComponent', () => {
  let component: TaskRegisterComponent;
  let fixture: ComponentFixture<TaskRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
