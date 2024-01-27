import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLeaveChartComponent } from './monthly-leave-chart.component';

describe('MonthlyLeaveChartComponent', () => {
  let component: MonthlyLeaveChartComponent;
  let fixture: ComponentFixture<MonthlyLeaveChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyLeaveChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyLeaveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
