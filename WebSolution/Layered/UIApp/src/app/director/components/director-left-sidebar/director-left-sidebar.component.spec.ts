import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorLeftSidebarComponent } from './director-left-sidebar.component';

describe('DirectorLeftSidebarComponent', () => {
  let component: DirectorLeftSidebarComponent;
  let fixture: ComponentFixture<DirectorLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
