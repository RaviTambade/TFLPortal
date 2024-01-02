import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformenceApprisalComponent } from './performence-apprisal.component';

describe('PerformenceApprisalComponent', () => {
  let component: PerformenceApprisalComponent;
  let fixture: ComponentFixture<PerformenceApprisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformenceApprisalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformenceApprisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
