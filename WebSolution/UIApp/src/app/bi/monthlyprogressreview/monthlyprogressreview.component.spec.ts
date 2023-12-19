import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyprogressreviewComponent } from './monthlyprogressreview.component';

describe('MonthlyprogressreviewComponent', () => {
  let component: MonthlyprogressreviewComponent;
  let fixture: ComponentFixture<MonthlyprogressreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyprogressreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyprogressreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
