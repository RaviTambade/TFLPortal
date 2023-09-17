import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerprojectdetailsComponent } from './managerprojectdetails.component';

describe('ManagerprojectdetailsComponent', () => {
  let component: ManagerprojectdetailsComponent;
  let fixture: ComponentFixture<ManagerprojectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerprojectdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
