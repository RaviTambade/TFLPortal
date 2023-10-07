import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalprojectworkhoursComponent } from './totalprojectworkhours.component';

describe('TotalprojectworkhoursComponent', () => {
  let component: TotalprojectworkhoursComponent;
  let fixture: ComponentFixture<TotalprojectworkhoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalprojectworkhoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalprojectworkhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
