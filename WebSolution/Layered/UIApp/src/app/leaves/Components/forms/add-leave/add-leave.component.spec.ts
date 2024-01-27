import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveComponent } from './add-leave.component';

describe('AddLeaveComponent', () => {
  let component: AddLeaveComponent;
  let fixture: ComponentFixture<AddLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
