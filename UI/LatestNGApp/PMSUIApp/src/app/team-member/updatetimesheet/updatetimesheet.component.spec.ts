import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetimesheetComponent } from './updatetimesheet.component';

describe('UpdatetimesheetComponent', () => {
  let component: UpdatetimesheetComponent;
  let fixture: ComponentFixture<UpdatetimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
