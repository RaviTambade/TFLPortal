import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanagerLeftSidebarComponent } from './hrmanager-left-sidebar.component';

describe('HrmanagerLeftSidebarComponent', () => {
  let component: HrmanagerLeftSidebarComponent;
  let fixture: ComponentFixture<HrmanagerLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmanagerLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmanagerLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
