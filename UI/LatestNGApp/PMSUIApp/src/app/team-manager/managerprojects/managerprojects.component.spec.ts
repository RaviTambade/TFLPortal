import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerprojectsComponent } from './managerprojects.component';

describe('ManagerprojectsComponent', () => {
  let component: ManagerprojectsComponent;
  let fixture: ComponentFixture<ManagerprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
