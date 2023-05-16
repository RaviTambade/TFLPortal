import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTaskComponent } from './insert-task.component';

describe('InsertTaskComponent', () => {
  let component: InsertTaskComponent;
  let fixture: ComponentFixture<InsertTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
