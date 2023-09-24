import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtasksbymanagerComponent } from './assignedtasksbymanager.component';

describe('AssignedtasksbymanagerComponent', () => {
  let component: AssignedtasksbymanagerComponent;
  let fixture: ComponentFixture<AssignedtasksbymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedtasksbymanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedtasksbymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
