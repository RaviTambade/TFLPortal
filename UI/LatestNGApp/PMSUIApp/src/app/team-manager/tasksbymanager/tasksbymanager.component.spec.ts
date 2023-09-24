import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksbymanagerComponent } from './tasksbymanager.component';

describe('TasksbymanagerComponent', () => {
  let component: TasksbymanagerComponent;
  let fixture: ComponentFixture<TasksbymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksbymanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksbymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
