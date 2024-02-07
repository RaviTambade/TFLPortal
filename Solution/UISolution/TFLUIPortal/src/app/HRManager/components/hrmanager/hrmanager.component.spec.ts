import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanagerComponent } from './hrmanager.component';

describe('HrmanagerComponent', () => {
  let component: HrmanagerComponent;
  let fixture: ComponentFixture<HrmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
