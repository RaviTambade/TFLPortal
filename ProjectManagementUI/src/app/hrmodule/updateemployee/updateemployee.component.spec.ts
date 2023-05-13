import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeeComponent } from './updateemployee.component';

describe('UpdateemployeeComponent', () => {
  let component: UpdateemployeeComponent;
  let fixture: ComponentFixture<UpdateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
