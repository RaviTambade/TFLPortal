import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserStoriesComponent } from './project-user-stories.component';

describe('ProjectUserStoriesComponent', () => {
  let component: ProjectUserStoriesComponent;
  let fixture: ComponentFixture<ProjectUserStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUserStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUserStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
