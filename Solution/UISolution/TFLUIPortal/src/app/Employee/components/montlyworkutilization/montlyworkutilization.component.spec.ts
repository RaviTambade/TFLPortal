import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontlyworkutilizationComponent } from './montlyworkutilization.component';

describe('MontlyworkutilizationComponent', () => {
  let component: MontlyworkutilizationComponent;
  let fixture: ComponentFixture<MontlyworkutilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontlyworkutilizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontlyworkutilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
