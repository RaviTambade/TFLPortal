import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallocatedtaskoverviewComponent } from './getallocatedtaskoverview.component';

describe('GetallocatedtaskoverviewComponent', () => {
  let component: GetallocatedtaskoverviewComponent;
  let fixture: ComponentFixture<GetallocatedtaskoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallocatedtaskoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallocatedtaskoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
