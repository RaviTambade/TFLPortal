import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprojectComponent } from './getproject.component';

describe('GetprojectComponent', () => {
  let component: GetprojectComponent;
  let fixture: ComponentFixture<GetprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
