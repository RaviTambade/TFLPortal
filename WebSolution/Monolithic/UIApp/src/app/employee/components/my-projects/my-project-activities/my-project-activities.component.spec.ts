import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectActivitiesComponent } from './my-project-activities.component';

describe('MyProjectActivitiesComponent', () => {
  let component: MyProjectActivitiesComponent;
  let fixture: ComponentFixture<MyProjectActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
