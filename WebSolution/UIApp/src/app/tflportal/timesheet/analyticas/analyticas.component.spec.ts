import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticasComponent } from './analyticas.component';

describe('AnalyticasComponent', () => {
  let component: AnalyticasComponent;
  let fixture: ComponentFixture<AnalyticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
