import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveallocationsComponent } from './leaveallocations.component';

describe('LeaveallocationsComponent', () => {
  let component: LeaveallocationsComponent;
  let fixture: ComponentFixture<LeaveallocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveallocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveallocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
