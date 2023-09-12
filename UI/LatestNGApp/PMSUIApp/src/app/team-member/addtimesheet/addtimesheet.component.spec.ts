import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimesheetComponent } from './addtimesheet.component';

describe('AddtimesheetComponent', () => {
  let component: AddtimesheetComponent;
  let fixture: ComponentFixture<AddtimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
