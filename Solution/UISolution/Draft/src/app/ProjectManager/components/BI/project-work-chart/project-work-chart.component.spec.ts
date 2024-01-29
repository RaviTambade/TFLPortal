import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkChartComponent } from './project-work-chart.component';

describe('ProjectWorkChartComponent', () => {
  let component: ProjectWorkChartComponent;
  let fixture: ComponentFixture<ProjectWorkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWorkChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWorkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
