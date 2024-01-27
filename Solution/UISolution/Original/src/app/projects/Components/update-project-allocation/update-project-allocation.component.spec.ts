import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectAllocationComponent } from './update-project-allocation.component';

describe('UpdateProjectAllocationComponent', () => {
  let component: UpdateProjectAllocationComponent;
  let fixture: ComponentFixture<UpdateProjectAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
