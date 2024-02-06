import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactNumberComponent } from './update-contact-number.component';

describe('UpdateContactNumberComponent', () => {
  let component: UpdateContactNumberComponent;
  let fixture: ComponentFixture<UpdateContactNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContactNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
