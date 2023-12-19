import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarystructureComponent } from './salarystructure.component';

describe('SalarystructureComponent', () => {
  let component: SalarystructureComponent;
  let fixture: ComponentFixture<SalarystructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarystructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarystructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
