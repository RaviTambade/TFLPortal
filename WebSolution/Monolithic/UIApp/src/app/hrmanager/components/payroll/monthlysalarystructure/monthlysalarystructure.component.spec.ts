import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlysalarystructureComponent } from './monthlysalarystructure.component';

describe('MonthlysalarystructureComponent', () => {
  let component: MonthlysalarystructureComponent;
  let fixture: ComponentFixture<MonthlysalarystructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlysalarystructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlysalarystructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
