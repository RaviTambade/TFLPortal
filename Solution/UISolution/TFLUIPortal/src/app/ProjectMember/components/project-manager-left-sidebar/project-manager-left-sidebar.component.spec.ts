import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerLeftSidebarComponent } from './project-manager-left-sidebar.component';

describe('ProjectManagerLeftSidebarComponent', () => {
  let component: ProjectManagerLeftSidebarComponent;
  let fixture: ComponentFixture<ProjectManagerLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
