import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryDetailsComponent } from './user-story-details.component';

describe('UserStoryDetailsComponent', () => {
  let component: UserStoryDetailsComponent;
  let fixture: ComponentFixture<UserStoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStoryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
