import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesDetailsComponent } from './activities-details.component';

describe('ActivitiesDetailsComponent', () => {
  let component: ActivitiesDetailsComponent;
  let fixture: ComponentFixture<ActivitiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
