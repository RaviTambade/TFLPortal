import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimerecordComponent } from './add-timerecord.component';

describe('AddTimerecordComponent', () => {
  let component: AddTimerecordComponent;
  let fixture: ComponentFixture<AddTimerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimerecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
