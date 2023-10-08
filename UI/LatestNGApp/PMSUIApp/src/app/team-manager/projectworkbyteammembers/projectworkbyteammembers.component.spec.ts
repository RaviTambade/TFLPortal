import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectworkbyteammembersComponent } from './projectworkbyteammembers.component';

describe('ProjectworkbyteammembersComponent', () => {
  let component: ProjectworkbyteammembersComponent;
  let fixture: ComponentFixture<ProjectworkbyteammembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectworkbyteammembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectworkbyteammembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
