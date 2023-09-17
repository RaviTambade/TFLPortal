import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredtasksComponent } from './filteredtasks.component';

describe('FilteredtasksComponent', () => {
  let component: FilteredtasksComponent;
  let fixture: ComponentFixture<FilteredtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredtasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
