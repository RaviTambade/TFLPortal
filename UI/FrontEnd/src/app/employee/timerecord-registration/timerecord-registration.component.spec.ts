import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerecordRegistrationComponent } from './timerecord-registration.component';

describe('TimerecordRegistrationComponent', () => {
  let component: TimerecordRegistrationComponent;
  let fixture: ComponentFixture<TimerecordRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerecordRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerecordRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
