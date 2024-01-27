import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeeworkComponent } from './createemployeework.component';

describe('CreateemployeeworkComponent', () => {
  let component: CreateemployeeworkComponent;
  let fixture: ComponentFixture<CreateemployeeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateemployeeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateemployeeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
