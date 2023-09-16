import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerprojectfiltersComponent } from './managerprojectfilters.component';

describe('ManagerprojectfiltersComponent', () => {
  let component: ManagerprojectfiltersComponent;
  let fixture: ComponentFixture<ManagerprojectfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerprojectfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerprojectfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
