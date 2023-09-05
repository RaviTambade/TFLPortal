import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegisterComponent } from './project-register.component';

describe('ProjectRegisterComponent', () => {
  let component: ProjectRegisterComponent;
  let fixture: ComponentFixture<ProjectRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
