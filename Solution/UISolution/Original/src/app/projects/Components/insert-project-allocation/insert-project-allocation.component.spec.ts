import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProjectAllocationComponent } from './insert-project-allocation.component';

describe('InsertProjectAllocationComponent', () => {
  let component: InsertProjectAllocationComponent;
  let fixture: ComponentFixture<InsertProjectAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProjectAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertProjectAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
