import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallProjectsComponent } from './getall-projects.component';

describe('GetallProjectsComponent', () => {
  let component: GetallProjectsComponent;
  let fixture: ComponentFixture<GetallProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
