import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcompletionComponent } from './projectcompletion.component';

describe('ProjectcompletionComponent', () => {
  let component: ProjectcompletionComponent;
  let fixture: ComponentFixture<ProjectcompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectcompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
