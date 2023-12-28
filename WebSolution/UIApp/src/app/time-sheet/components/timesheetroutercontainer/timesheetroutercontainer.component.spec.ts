import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetroutercontainerComponent } from './timesheetroutercontainer.component';

describe('TimesheetroutercontainerComponent', () => {
  let component: TimesheetroutercontainerComponent;
  let fixture: ComponentFixture<TimesheetroutercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetroutercontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetroutercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
