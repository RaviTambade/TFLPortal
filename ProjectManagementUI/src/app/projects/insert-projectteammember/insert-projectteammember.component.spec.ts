import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProjectteammemberComponent } from './insert-projectteammember.component';

describe('InsertProjectteammemberComponent', () => {
  let component: InsertProjectteammemberComponent;
  let fixture: ComponentFixture<InsertProjectteammemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProjectteammemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertProjectteammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
