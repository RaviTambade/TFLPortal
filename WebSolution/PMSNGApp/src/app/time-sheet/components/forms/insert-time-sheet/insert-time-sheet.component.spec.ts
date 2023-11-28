import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTimeSheetComponent } from './insert-time-sheet.component';

describe('InsertTimeSheetComponent', () => {
  let component: InsertTimeSheetComponent;
  let fixture: ComponentFixture<InsertTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTimeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
