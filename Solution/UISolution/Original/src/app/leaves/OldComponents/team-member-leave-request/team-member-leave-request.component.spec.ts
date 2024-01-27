import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberLeaveRequestComponent } from './team-member-leave-request.component';

describe('TeamMemberLeaveRequestComponent', () => {
  let component: TeamMemberLeaveRequestComponent;
  let fixture: ComponentFixture<TeamMemberLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
