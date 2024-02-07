import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerComponent } from './projectmanager.component';

describe('ProjectmanagerComponent', () => {
  let component: ProjectmanagerComponent;
  let fixture: ComponentFixture<ProjectmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
