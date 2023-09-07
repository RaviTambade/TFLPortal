import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerecordsDetailsComponent } from './timerecords-details.component';

describe('TimerecordsDetailsComponent', () => {
  let component: TimerecordsDetailsComponent;
  let fixture: ComponentFixture<TimerecordsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerecordsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerecordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
