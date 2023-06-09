import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectgridComponent } from './projectgrid.component';

describe('ProjectgridComponent', () => {
  let component: ProjectgridComponent;
  let fixture: ComponentFixture<ProjectgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
