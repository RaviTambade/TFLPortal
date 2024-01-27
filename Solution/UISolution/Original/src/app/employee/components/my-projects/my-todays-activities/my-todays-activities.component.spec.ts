import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodaysActivitiesComponent } from './my-todays-activities.component';

describe('MyTodaysActivitiesComponent', () => {
  let component: MyTodaysActivitiesComponent;
  let fixture: ComponentFixture<MyTodaysActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTodaysActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTodaysActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
