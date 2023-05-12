import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjectByIdComponent } from './get-project-by-id.component';

describe('GetProjectByIdComponent', () => {
  let component: GetProjectByIdComponent;
  let fixture: ComponentFixture<GetProjectByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProjectByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProjectByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
