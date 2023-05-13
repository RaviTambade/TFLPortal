import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectComponent } from './updateproject.component';

describe('UpdateprojectComponent', () => {
  let component: UpdateprojectComponent;
  let fixture: ComponentFixture<UpdateprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
