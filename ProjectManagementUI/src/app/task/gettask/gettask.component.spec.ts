import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettaskComponent } from './gettask.component';

describe('GettaskComponent', () => {
  let component: GettaskComponent;
  let fixture: ComponentFixture<GettaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
