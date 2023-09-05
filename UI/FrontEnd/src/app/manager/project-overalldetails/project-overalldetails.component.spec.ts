import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOveralldetailsComponent } from './project-overalldetails.component';

describe('ProjectOveralldetailsComponent', () => {
  let component: ProjectOveralldetailsComponent;
  let fixture: ComponentFixture<ProjectOveralldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOveralldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOveralldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
