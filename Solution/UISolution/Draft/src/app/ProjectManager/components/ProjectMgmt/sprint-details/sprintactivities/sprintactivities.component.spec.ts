import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintactivitiesComponent } from './sprintactivities.component';

describe('SprintactivitiesComponent', () => {
  let component: SprintactivitiesComponent;
  let fixture: ComponentFixture<SprintactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
