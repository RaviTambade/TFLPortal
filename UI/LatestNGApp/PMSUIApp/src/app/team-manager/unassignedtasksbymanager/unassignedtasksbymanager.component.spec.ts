import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedtasksbymanagerComponent } from './unassignedtasksbymanager.component';

describe('UnassignedtasksbymanagerComponent', () => {
  let component: UnassignedtasksbymanagerComponent;
  let fixture: ComponentFixture<UnassignedtasksbymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedtasksbymanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedtasksbymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
