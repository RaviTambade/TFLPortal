import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeeworkComponent } from './updateemployeework.component';

describe('UpdateemployeeworkComponent', () => {
  let component: UpdateemployeeworkComponent;
  let fixture: ComponentFixture<UpdateemployeeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemployeeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateemployeeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
