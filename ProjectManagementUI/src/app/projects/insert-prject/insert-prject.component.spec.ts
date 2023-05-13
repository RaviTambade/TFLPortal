import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPrjectComponent } from './insert-prject.component';

describe('InsertPrjectComponent', () => {
  let component: InsertPrjectComponent;
  let fixture: ComponentFixture<InsertPrjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPrjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPrjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
