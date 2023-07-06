import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTimerecordComponent } from './details-timerecord.component';

describe('DetailsTimerecordComponent', () => {
  let component: DetailsTimerecordComponent;
  let fixture: ComponentFixture<DetailsTimerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTimerecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTimerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
