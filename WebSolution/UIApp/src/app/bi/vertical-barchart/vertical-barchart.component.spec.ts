import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarchartComponent } from './vertical-barchart.component';

describe('VerticalBarchartComponent', () => {
  let component: VerticalBarchartComponent;
  let fixture: ComponentFixture<VerticalBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
