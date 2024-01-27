import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyreviewprogressComponent } from './dailyreviewprogress.component';

describe('DailyreviewprogressComponent', () => {
  let component: DailyreviewprogressComponent;
  let fixture: ComponentFixture<DailyreviewprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyreviewprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyreviewprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
