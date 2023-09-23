import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedtasksComponent } from './unassignedtasks.component';

describe('UnassignedtasksComponent', () => {
  let component: UnassignedtasksComponent;
  let fixture: ComponentFixture<UnassignedtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedtasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
