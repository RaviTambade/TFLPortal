import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntheunassignedtaskComponent } from './assigntheunassignedtask.component';

describe('AssigntheunassignedtaskComponent', () => {
  let component: AssigntheunassignedtaskComponent;
  let fixture: ComponentFixture<AssigntheunassignedtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigntheunassignedtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigntheunassignedtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
