import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlystatusComponent } from './yearlystatus.component';

describe('YearlystatusComponent', () => {
  let component: YearlystatusComponent;
  let fixture: ComponentFixture<YearlystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlystatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
