import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectactivitiesPiechartComponent } from './projectactivities-piechart.component';

describe('ProjectactivitiesPiechartComponent', () => {
  let component: ProjectactivitiesPiechartComponent;
  let fixture: ComponentFixture<ProjectactivitiesPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectactivitiesPiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectactivitiesPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
