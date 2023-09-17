import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectteammembersComponent } from './projectteammembers.component';

describe('ProjectteammembersComponent', () => {
  let component: ProjectteammembersComponent;
  let fixture: ComponentFixture<ProjectteammembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectteammembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectteammembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
