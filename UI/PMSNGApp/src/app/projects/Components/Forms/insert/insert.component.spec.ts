import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertComponent } from './insert.component';

describe('InsertComponent', () => {
  let component: InsertComponent;
  let fixture: ComponentFixture<InsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
