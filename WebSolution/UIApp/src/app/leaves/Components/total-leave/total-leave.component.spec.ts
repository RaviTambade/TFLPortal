import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLeaveComponent } from './total-leave.component';

describe('TotalLeaveComponent', () => {
  let component: TotalLeaveComponent;
  let fixture: ComponentFixture<TotalLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
