import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTimeSheetEntryComponent } from './insert-time-sheet-entry.component';

describe('InsertTimeSheetEntryComponent', () => {
  let component: InsertTimeSheetEntryComponent;
  let fixture: ComponentFixture<InsertTimeSheetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTimeSheetEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTimeSheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
