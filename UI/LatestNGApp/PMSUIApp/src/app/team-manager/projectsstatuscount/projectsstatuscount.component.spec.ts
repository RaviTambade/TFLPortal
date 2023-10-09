import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsstatuscountComponent } from './projectsstatuscount.component';

describe('ProjectsstatuscountComponent', () => {
  let component: ProjectsstatuscountComponent;
  let fixture: ComponentFixture<ProjectsstatuscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsstatuscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsstatuscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
