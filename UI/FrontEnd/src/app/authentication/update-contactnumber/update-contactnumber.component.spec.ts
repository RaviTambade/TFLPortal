import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactnumberComponent } from './update-contactnumber.component';

describe('UpdateContactnumberComponent', () => {
  let component: UpdateContactnumberComponent;
  let fixture: ComponentFixture<UpdateContactnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactnumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContactnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
