import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerecordListComponent } from './timerecord-list.component';

describe('TimerecordListComponent', () => {
  let component: TimerecordListComponent;
  let fixture: ComponentFixture<TimerecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerecordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
