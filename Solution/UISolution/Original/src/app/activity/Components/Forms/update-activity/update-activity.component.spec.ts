import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityComponent } from './update-activity.component';

describe('UpdateActivityComponent', () => {
  let component: UpdateActivityComponent;
  let fixture: ComponentFixture<UpdateActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
