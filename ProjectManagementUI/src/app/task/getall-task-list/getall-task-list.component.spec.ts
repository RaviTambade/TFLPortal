import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallTaskListComponent } from './getall-task-list.component';

describe('GetallTaskListComponent', () => {
  let component: GetallTaskListComponent;
  let fixture: ComponentFixture<GetallTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
