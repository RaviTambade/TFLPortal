import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedLeaveComponent } from './consumed-leave.component';

describe('ConsumedLeaveComponent', () => {
  let component: ConsumedLeaveComponent;
  let fixture: ComponentFixture<ConsumedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
