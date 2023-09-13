import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailsinfoComponent } from './taskdetailsinfo.component';

describe('TaskdetailsinfoComponent', () => {
  let component: TaskdetailsinfoComponent;
  let fixture: ComponentFixture<TaskdetailsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdetailsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdetailsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
