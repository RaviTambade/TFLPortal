import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDurationComponent } from './work-duration.component';

describe('WorkDurationComponent', () => {
  let component: WorkDurationComponent;
  let fixture: ComponentFixture<WorkDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
