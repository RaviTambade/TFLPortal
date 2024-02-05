import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailsComponent } from './projectdetails.component';

describe('ProjectdetailsComponent', () => {
  let component: ProjectdetailsComponent;
  let fixture: ComponentFixture<ProjectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
