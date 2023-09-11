import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksofprojectsComponent } from './tasksofprojects.component';

describe('TasksofprojectsComponent', () => {
  let component: TasksofprojectsComponent;
  let fixture: ComponentFixture<TasksofprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksofprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksofprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
