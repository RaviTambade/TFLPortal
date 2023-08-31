import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTimerecordComponent } from './add-to-timerecord.component';

describe('AddToTimerecordComponent', () => {
  let component: AddToTimerecordComponent;
  let fixture: ComponentFixture<AddToTimerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToTimerecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToTimerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
