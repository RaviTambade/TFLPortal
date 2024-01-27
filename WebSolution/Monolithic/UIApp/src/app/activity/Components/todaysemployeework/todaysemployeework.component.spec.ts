import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysemployeeworkComponent } from './todaysemployeework.component';

describe('TodaysemployeeworkComponent', () => {
  let component: TodaysemployeeworkComponent;
  let fixture: ComponentFixture<TodaysemployeeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysemployeeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysemployeeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
