import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyprogreessreviewComponent } from './weeklyprogreessreview.component';

describe('WeeklyprogreessreviewComponent', () => {
  let component: WeeklyprogreessreviewComponent;
  let fixture: ComponentFixture<WeeklyprogreessreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyprogreessreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyprogreessreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
