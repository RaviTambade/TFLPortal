import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryprocessingComponent } from './salaryprocessing.component';

describe('SalaryprocessingComponent', () => {
  let component: SalaryprocessingComponent;
  let fixture: ComponentFixture<SalaryprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryprocessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
