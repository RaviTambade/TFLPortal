import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammanagerdashboardComponent } from './teammanagerdashboard.component';

describe('TeammanagerdashboardComponent', () => {
  let component: TeammanagerdashboardComponent;
  let fixture: ComponentFixture<TeammanagerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammanagerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeammanagerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
