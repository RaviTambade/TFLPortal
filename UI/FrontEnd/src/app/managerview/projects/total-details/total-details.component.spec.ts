import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDetailsComponent } from './total-details.component';

describe('TotalDetailsComponent', () => {
  let component: TotalDetailsComponent;
  let fixture: ComponentFixture<TotalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
